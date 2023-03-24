<template>
  <div class="home">
    <NavbarAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarAdmin from "@/admin/components/NavbarAdmin.vue"

export default {
  name: "Login",
  components: {
    NavbarAdmin,
  },
}
</script>
