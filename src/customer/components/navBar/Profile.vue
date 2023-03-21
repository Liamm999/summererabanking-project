<template>
  <div>
    <div class="text">
      <h4>Hello</h4>
      <h3>{{ username }}</h3>
    </div>
    <div class="image">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
  </div>
</template>

<script setup>
import { PropType } from "vue"

const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
    default: "../../assets/img/fakeAvt.jpg",
  },

  imgAlt: {
    type: String,
    required: false,
    default: "user's avatar",
  },

  username: {
    type: String,
    required: true,
    default: "",
  },
})
</script>

<style lang="scss" scoped></style>
