import router from "../router"
import { useCookies } from "vue3-cookies"

const cookies = useCookies().cookies

router.beforeEach(async (to, from, next) => {
  const jwt = cookies.get("jwt")

  if (!jwt) {
    console.log(to.fullPath)
    if (to.path !== "/login") {
      console.log("Please login")
      next("/login")
    } else next()
  } else {
    console.log(to.fullPath)
    if (to.name !== "Dashboard") {
      next()
    } else {
      console.log(to.fullPath)
      next()
    }
  }
})
