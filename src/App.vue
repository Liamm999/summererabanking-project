<template>
  <router-view></router-view>
</template>
<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = this.$route.name
      },
    },
  },
}
</script>
<style></style>
