export function getCurrentTime() {
  let today = new Date()
  let date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate()
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const thisTime = `${time} on ${date}`
  return thisTime
}
