<template>
  <div class="flex items-end">
    <div class="text flex flex-col items-end mr-5">
      <h4 class="text-sm font-semibold">Hello</h4>
      <h3 class="text-xl">{{ username }}</h3>
    </div>
    <div class="image">
      <img class="w-16 h-16 rounded-full" src="../../assets/img/fakeAvt.jpg" />
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
