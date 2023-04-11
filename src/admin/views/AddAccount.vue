<template>
  <div class="flex flex-col justify-center items-center text-cyan-100">
    Add account
    <button @click="handleClick">Click to change the world</button>
  </div>
</template>

<script>
export default {
  name: "AdminHomepage",
  methods: {
    handleClick: function () {
      this.$router.push("/admin/dashboard")
    },
  },
}
</script>

<style lang="scss" scoped></style>
