import Divider from "@mui/material/Divider"
import isItTheSameDay from "utility/isItTheSameDay"
import formatDate from "utility/formatDate"
import useTheme from "@mui/material/styles/useTheme"

const DateDivider = ({ children }) => {
  const { palette } = useTheme()
  return (
    <Divider
      component="li"
      sx={{
        color: palette.text.tertiary,
        fontSize: "0.80rem",
        fontWeight: "bold",
        margin: "-19px 0 -9px",
        paddingTop: "10px"
      }}
    >
      {children}
    </Divider>
  )
}

export default function DisplayDate({ message, index, messages }) {
  const thisMessageDate = new Date(parseInt(message.createdAt, 10))
  const now = new Date()
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000) // by subtracting 24 hours in ms

  // The very first message must display a date
  // The query returns desc by createdAt date, so
  // the last array element has the first message to be created
  if (index === messages.length - 1) {
    if (isItTheSameDay(now, thisMessageDate)) {
      return <DateDivider>TODAY</DateDivider>
    }
    if (isItTheSameDay(yesterday, thisMessageDate)) {
      return <DateDivider>YESTERDAY</DateDivider>
    }
    return <DateDivider>{formatDate(thisMessageDate).toUpperCase()}</DateDivider>
  }

  // Not the very first message

  const lastMessageDate = new Date(parseInt(messages[index + 1].createdAt, 10))

  // Don't display the date if this message was sent on
  // the same day as the last message
  if (isItTheSameDay(thisMessageDate, lastMessageDate)) {
    return null
  }

  if (isItTheSameDay(now, thisMessageDate)) {
    return <DateDivider>TODAY</DateDivider>
  }

  if (isItTheSameDay(yesterday, thisMessageDate)) {
    return <DateDivider>YESTERDAY</DateDivider>
  }

  return <DateDivider>{formatDate(thisMessageDate).toUpperCase()}</DateDivider>
}
