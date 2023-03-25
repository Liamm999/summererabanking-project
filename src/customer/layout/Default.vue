<template>
  <div>
    <div
      class="header relative py-2 bg-slate-50 grid grid-cols-3 text-on-white place-items-center"
    >
      <div class="blank"></div>
      <logo />
      <profile :img-src="imgSrc" :username="username" />
    </div>
    <slot class="" name="content"> </slot>
    <div class="w-1/3 z-10 absolute bottom-0 right-0">
      <img src="../assets/img/connerImage.png" alt="" srcset="" />
    </div>
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
