/* eslint-disable indent */

// MUI
import Container from "@mui/material/Container"
import List from "@mui/material/List"
import Stack from "@mui/material/Stack"

// Module imports
import { useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { useLazyQuery, useApolloClient } from "@apollo/client"
import { useSelector } from "react-redux"
import find from "lodash/find"

// Internal imports
import MESSAGES from "graphql/queries/Messages"
import NEW_MESSAGE from "graphql/subscriptions/NewMessage"
import ME from "graphql/queries/Me"
import MessageCard from "components/MessageCard"
import DisplayDate from "components/DisplayDate"
import { selectMeQueryDone } from "store/meSlice"

export default function Chat() {
  // Hooks
  const { subjectId: subjectIdString } = useParams()
  // subjectId was a string, parsed into int. If string is undefined, returns NaN.
  const subjectId = parseInt(subjectIdString, 10)

  const client = useApolloClient()

  const meQueryDone = useSelector(selectMeQueryDone)

  const [fetchMessages, { called, loading, error, data, subscribeToMore }] =
    useLazyQuery(MESSAGES, {
      fetchPolicy: "network-only"
    })

  // Calls the query each time the subjectId changes if subjectId exists
  useEffect(() => {
    if (subjectId) {
      fetchMessages({
        variables: {
          friendId: subjectId
        }
      })
    }
  }, [subjectId])

  // Unsubscribes then Subscribes each time data changes.
  // (data changes when data is successfully fetched)
  // The first time data is defined, this effect runs, subscribing.
  // Then, each time data is redefined, effect cleanup runs (unsubscribe)
  // then the effect runs (subscribe). When finally navigating away, cleanup will run.
  useEffect(() => {
    if (data) {
      // Once all messages have been queried, subscribe.
      const unsubscribe = subscribeToMore({
        document: NEW_MESSAGE,
        variables: { friendId: subjectId },
        // ctrl+click updateQuery to see signature. Dont bother checking docs, it only adds confusion.
        updateQuery(prev, { subscriptionData }) {
          // If the subscription does not fetch a new message return the previous query result
          if (!subscriptionData?.data) return prev
          // Query object must be returned immutably
          return {
            ...prev,
            messages: [subscriptionData.data.newMessage, ...prev.messages]
          }
        }
      })
      return () => {
        unsubscribe()
      }
    }
  }, [data])

  // End of hooks

  if (!called) {
    // TODO. Just show background in production.
    return (
      <div style={{ width: "100%" }}>
        Query not called yet, probably because a friend was not selected. Ie,
        params is blank.
      </div>
    )
  }

  if (loading) {
    // TODO. Show loading animation.
    return <div style={{ width: "100%" }}>Loading the Messages query</div>
  }

  if (error) {
    // TODO. Display via toast
    return (
      <div style={{ width: "100%" }}>
        Messages query threw an error. Logged to console.
      </div>
    )
  }

  // data was fetched successfully, but empty

  // messages query always returns an array, if its empty that means
  // that the user does not exist, or there are just no messages between the users
  if (!data.messages.length) {
    return (
      <div style={{ width: "100%" }}>
        This user does not exist or you have never conversed with this user
      </div>
    )
  }

  // data was fetched succesfully, and it actually contains results

  let friend = {}
  if (meQueryDone) {
    const meQueryData = client.readQuery({ query: ME })
    const friendObj = find(meQueryData.user.friends, (o) => o.id === subjectId)
    if (friendObj) {
      friend = friendObj
    }
  }

  return (
    // TODO. Make it look good.
    <Container>
      {/* Using stack as the component so I can reverse the order */}
      <List
        dense={false}
        component={Stack}
        direction="column-reverse"
      >
        {data.messages.map((message, index, messages) => (
          <Fragment key={`message-id-${message.id}`}>
            <MessageCard message={message} friend={friend} />
            <DisplayDate
              message={message}
              index={index}
              messages={messages}
            />
          </Fragment>
        ))}
      </List>
    </Container>
  )
}
