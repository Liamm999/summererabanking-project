import router from "../router"

router.beforeEach(async (to, from, next) => {
  const jwt = JSON.parse(localStorage.getItem("token"))

  if (jwt && to.path === "/") {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    console.log(currentUser)
    if (currentUser.admin) {
      next("/admin/homepage")
    } else {
      next("/customer/dashboard")
    }
  }

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
})
