<template>
  <div class="home">
    <NavbarAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarAdmin from "@/admin/components/NavbarAdmin.vue"
import HelloWorld from "../components/HelloWorld.vue"

export default {
  name: "Login",
  components: {
    NavbarAdmin,
},
}
</script>
