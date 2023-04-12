import router from "../router"
import { useCookies } from "vue3-cookies"
import axios from "axios"

const cookies = useCookies().cookies

router.beforeEach(async (to, from, next) => {
  const jwt = cookies.get("jwt")

  if (!jwt) {
    if (to.name !== "Error" && to.name !== "Register") {
      console.log(to.fullPath)
      if (to.path !== "/login") {
        console.log("Please login")
        next("/login")
      } else {
        next()
      }
    } else next()
  } else {
    if (!to.name) {
      next("/404")
    }
    next()
  }

  if (jwt && to.path === "/") {
    try {
      const isAdmin = (
        await axios.post(
          "user/isadmin",
          {
            withCredentials: true,
          },
          jwt
        )
      ).data.admin
      console.log(jwt)
      console.log(isAdmin)
      if (isAdmin) {
        router.push("/admin/homepage")
      } else {
        router.push("/customer/dashboard")
      }
    } catch (err) {
      alert(err.message)
    }
  }
})
