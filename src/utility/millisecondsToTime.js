/**
 * ChatGPT generated with the following prompt:
 * Write a function in JavaScript that takes as its argument a string
 * representing the date in milliseconds since epoch and returns a string
 * that represents the time in a 12 hour clock format like 3:40 pm
 */

export default function millisecondsToTime(dateInMs) {
  const date = new Date(parseInt(dateInMs, 10))
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12
  hours = hours === 0 ? 12 : hours // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes
  return (hours + ":" + minutes + " " + ampm)
}
