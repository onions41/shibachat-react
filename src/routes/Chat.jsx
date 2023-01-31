// MUI
import Container from "@mui/material/Container"
import List from "@mui/material/List"

// Module imports
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLazyQuery } from "@apollo/client"

// Internal imports
import MESSAGES from "graphql/queries/Messages"
import MessageCard from "components/MessageCard"

export default function Chat() {
  // Hooks
  const { subjectId } = useParams()

  const [fetchMessages, { called, loading, error, data }] = useLazyQuery(
    MESSAGES,
    {
      fetchPolicy: "network-only"
    }
  )

  // Runs only the first time, and then only after change to subjectId
  useEffect(() => {
    fetchMessages({
      variables: {
        friendId: parseInt(subjectId, 10)
      }
    })
  }, [subjectId])

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

  if (!called) {
    return <div style={{ width: "100%" }}>Not called yet</div>
  }

  if (loading) {
    return <div style={{ width: "100%" }}>Loading the Messages query</div>
  }

  if (error) {
    console.log("***Messages query error: ", error)
    return (
      <div style={{ width: "100%" }}>
        Messages query threw an error. Logged to console.
      </div>
    )
  }

  // data was fetched successfully

  if (!data.massages.length()) {
    return (
      <div style={{ width: "100%" }}>
        This user does not exist or you have never conversed with this user
      </div>
    )
  }

  return (
    <Container>
      <List dense={false}>
        {data.messages.map((message) => (
          <MessageCard key={`message-id-${message.id}`} message={message} />
        ))}
      </List>
    </Container>
  )
}
