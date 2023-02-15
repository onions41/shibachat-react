/**
 * Takes one date object, or optionally a second date object
 * as arguments and returns true if the first date falls within
 * the same year as the current date or falls within the same year
 * as the second date argument.
 */

export default function isItTheSameYear(date1Obj, date2Obj = new Date()) {
  if (
    date1Obj.getFullYear() === date2Obj.getFullYear()
  ) {
    return true
  }

  return false
}
