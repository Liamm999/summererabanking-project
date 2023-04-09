<template>
  <div class="flex items-end">
    <div class="text flex flex-col items-end mr-5">
      <h4 class="text-sm font-semibold">Hello</h4>
      <h3 class="text-lg">{{ username }}</h3>
    </div>
    <div class="image">
      <img class="w-16 h-16 rounded-full" :src="imgSrc" />
    </div>
  </div>
</template>

<script setup>
// import { computed, ref } from "vue"

// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
    default: () => require("@/customer/assets/img/fakeAvt.jpg"),
  },

  username: {
    type: String,
    required: true,
    default: "",
  },
})
</script>

<style lang="scss" scoped></style>
