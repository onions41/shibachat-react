export default function isItTheSameDay(date1Obj, date2Obj) {
  if (
    date1Obj.getFullYear() === date2Obj.getFullYear() &&
    date1Obj.getMonth() === date2Obj.getMonth() &&
    date1Obj.getDate() === date2Obj.getDate()
  ) {
    return true
  }

  return false
}
