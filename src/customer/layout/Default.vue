<template>
  <div>
    <div class="header flex justify-center relative py-2 bg-slate-50">
      <div
        class="container grid grid-cols-1 sm1:grid-cols-2 lg:grid-cols-3 text-on-white"
      >
        <div class="blank sm:hidden lg:block"></div>
        <logo class="my-auto mx-auto" />
        <profile
          class="hidden ml-auto mr-0 sm1:flex"
          :img-src="imgSrc"
          :username="username"
        />
      </div>
    </div>
    <slot class="" name="content"></slot>
    <div
      class="footer flex justify-center items-center bg-slate-700 w-full h-16 mt-44 text-lg"
    >
      <p class="">Coppyright 2022 SE2</p>
    </div>
  </div>
</template>

<script setup>
import logo from "../components/navBar/Logo.vue"
import profile from "../components/navBar/Profile.vue"
import { ref } from "vue"

const imgSrc = ref(require("@/customer/assets/img/vu.jpg"))
const username = ref("LA MINH VU")
</script>

<style lang="scss" scoped></style>
