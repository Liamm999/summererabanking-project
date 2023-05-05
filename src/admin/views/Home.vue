<template>
  <div class="homepage flex flex-row text-cyan-100 h-1/2">
    <div class="px-4 w-1/3">
      <img src="../assets/image/Logo_bank.png" class="w-32 h-32" />
      <div class="flex flex-col h-3/4 justify-center items-center">
        <button @click="handleClick">Click to change the world</button>
      </div>
    </div>
    <div class="w-3/5 h-1/2">
      <img src="../assets/image/homepage.png" class="w-auto h-auto" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleClick: function () {
      this.$router.push("/admin/dashboard")
    },
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  background-image: url(../assets/image/homepage.png);
}
</style>
