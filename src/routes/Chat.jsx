// MUI
import Container from "@mui/material/Container"
import List from "@mui/material/List"

// Module imports
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"

// Internal imports
import MESSAGES from "graphql/queries/Messages"
import NEW_MESSAGE from "graphql/subscriptions/NewMessage"
import MessageCard from "components/MessageCard"

export default function Chat() {
  // Hooks
  const { subjectId: subjectIdString } = useParams()
  const subjectId = parseInt(subjectIdString, 10) // subjectId was a string, parsed into int

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
            messages: [...prev.messages, subscriptionData.data.newMessage]
          }
        }
      })
      return () => {
        unsubscribe()
      }
    }
  }, [data])

  // End of hooks

  // There is no number in the param
  if (typeof subjectId === "undefined") {
    return (
      <div style={{ width: "100%" }}>
        You did not pick a subject, there is no subject number in the params.
        This should display a blank stylized page.
      </div>
    )
  }

  // Not called yet. This screen should never last very long as query will be called in the effect immediately after, but
  // is required coordinate the query status to the renders.
  if (!called) { // TODO. Just show background in production.
    return <div style={{ width: "100%" }}>Query not called yet</div>
  }

  if (loading) { // TODO. Show loading animation.
    return <div style={{ width: "100%" }}>Loading the Messages query</div>
  }

  if (error) { // TODO. Display via toast
    return (
      <div style={{ width: "100%" }}>
        Messages query threw an error. Logged to console.
      </div>
    )
  }

  // data was fetched successfully

  // messages query always returns an array, if its empty that means
  // that the user does not exist, or there are just no messages between the users
  if (!data.messages.length) {
    return (
      <div style={{ width: "100%" }}>
        This user does not exist or you have never conversed with this user
      </div>
    )
  }

  return ( // TODO. Make it look good.
    <Container>
      <List dense={false}>
        {data.messages.map((message) => (
          <MessageCard
            key={`message-id-${message.id}`}
            message={message}
          />
        ))}
      </List>
    </Container>
  )
}
