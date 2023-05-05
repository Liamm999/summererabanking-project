export function formatTransaction(user, sender, money) {
  if (user == sender) {
    console.log("true")
    return (money = "- " + money)
  }
  return "+ " + money
}
