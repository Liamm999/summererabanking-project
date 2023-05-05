<template>
  <div class="relative">
    <div class="header flex justify-center relative py-2 bg-slate-50">
      <div class="container grid grid-cols-2 lg:grid-cols-3 text-on-white">
        <div class="blank hidden lg:block"></div>
        <logo class="my-auto mx-auto" />
        <profile
          class="hidden ml-auto mr-0 sm1:flex"
          :img-src="imgSrc"
          :username="currentUser.name"
        />
        <Sidebar
          class="sm1:hidden"
          @click="handleNav"
          :is-shown="isShown"
          :acc-num="currentUser.username"
        />
      </div>
    </div>
    <div class="container mx-auto mt-20 min-h-screen">
      <slot class="" name="content"></slot>
    </div>
    <div
      class="footer absolute bottom-auto flex justify-center items-center bg-slate-700 w-full h-16 text-lg"
    >
      <p class="">Coppyright 2022 SE2</p>
    </div>
  </div>
</template>

<script setup>
import logo from "../components/navBar/Logo.vue"
import profile from "../components/navBar/Profile.vue"
import { ref, onMounted } from "vue"
import Sidebar from "../../shared/components/Sidebar.vue"

const imgSrc = ref(require("@/customer/assets/img/fakeAvt.jpg"))
const isShown = ref(false)
const currentUser = ref({})

onMounted(() => {
  currentUser.value = JSON.parse(localStorage.getItem("currentUser"))
})

function handleNav() {
  if (isShown.value) {
    isShown.value = false
    console.log("hide")
  } else {
    isShown.value = true
    console.log("show")
  }
}
</script>

<style lang="scss" scoped></style>
