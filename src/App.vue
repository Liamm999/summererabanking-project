<template>
  <router-view></router-view>
</template>
<script>
import axios from "axios"
import { useCookies } from "vue3-cookies"
import { useRouter } from "vue-router"

export default {
  watch: {
    $route: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(to, from) {
        document.title = this.$route.name
      },
    },
  },

  async mounted() {
    const router = useRouter()
    const jwt = useCookies().cookies.get("jwt")
    if (jwt) {
      try {
        const isAdmin = (await axios.post("user/isadmin", jwt)).data.admin
        console.log(isAdmin)
        if (isAdmin) {
          router.push("/admin/home")
        } else {
          router.push("/customer/dashboard")
        }
      } catch (err) {
        alert(err.message)
      }
    }
  },
}
</script>
<style></style>
