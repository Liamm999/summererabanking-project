<template>
  <div>
    <div
      class="header py-2 bg-slate-50 grid grid-cols-3 text-on-white place-items-center"
    >
      <div class="blank"></div>
      <logo />
      <profile :img-src="imgSrc" :username="username" />
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import logo from "../components/navBar/Logo.vue"
import profile from "../components/navBar/Profile.vue"
import { ref } from "vue"

const imgSrc = ref("../../assets/img/fakeAvt.jpg")
const username = ref("fake name")
</script>

<style lang="scss" scoped></style>
