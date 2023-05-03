export function getCurrentTime() {
  let today = new Date()
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const thisTime = `${date} ${time}`
  return thisTime
}
