/* eslint-disable indent */
// There is a bug in eslint where the rule that would allow it
// to be competable with Prettier's ternery operator indenting,
// which cannot be customized. Feb 2023. TODO: check eslint gh
// for updates on the issue.

// MUI
import Container from "@mui/material/Container"
import List from "@mui/material/List"
import Stack from "@mui/material/Stack"

// Module imports
import { useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"

// Internal imports
import MESSAGES from "graphql/queries/Messages"
import NEW_MESSAGE from "graphql/subscriptions/NewMessage"
import DisplayDate from "./DisplayDate"
import MessageCard from "./MessageCard"

export default function Content({ me }) {
  // Hooks
  const { subjectId: subjectIdStr } = useParams()
  // subjectId was a string, parsed into int. If string is undefined, returns NaN.
  const subjectId = parseInt(subjectIdStr, 10)

  const { loading, error, data, subscribeToMore } = useQuery(MESSAGES, {
    variables: {
      friendId: subjectId
    },
    skip: !subjectId, // Skip of subjectId is NaN
    fetchPolicy: "network-only"
  })

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

  if (!subjectId) {
    // TODO. Just show background in production.
    return (
      <div style={{ width: "100%" }}>
        Nothing in params
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

  return (
    /* Using stack as the component so I can reverse the order */
    // Wrapping the list in container seems to fix the divider error where the text is offset
    <Container maxWidth={false}>
      <List
        dense={false}
        component={Stack}
        direction="column-reverse"
      >
        {data.messages.map((message, index, messages) => (
          <Fragment key={`message-id-${message.id}`}>
            <MessageCard
              message={message}
              me={me}
            />
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
