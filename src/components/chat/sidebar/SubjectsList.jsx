// MUI
import List from "@mui/material/List"

// Internal imports
import SubjectCard from "./SubjectCard"

export default function SubjectsList({ me }) {
  // Filters friends by whether or not there are messages between user and friend
  // then sorts the results in descending order by date.
  const messagedFriends = me.friends.filter((friend) => friend.latestMessageWithMe)
  const messageFriendsDesc = messagedFriends.sort((later, earlier) => parseInt(later, 10) - parseInt(earlier, 10))

  return (
    <List dense={false}>
      {messageFriendsDesc.map((friend) => (
        <SubjectCard
          subject={friend}
          // cancelFReqLoading={cancelFReqLoading}add
          key={`friend-${friend.id}`}
        />
      ))}
    </List>
  )
}
