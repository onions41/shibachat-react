/**
 * Takes a date object as argument and returns a string like Feb 13 or Feb 13 2020
 * depending on whether or not the date parameter falls within the current year.
 */

import isItTheSameYear from "./isItTheSameYear"

export default function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  if (isItTheSameYear(date)) {
    return month + " " + day
  }

  return month + " " + day + " " + year
}
