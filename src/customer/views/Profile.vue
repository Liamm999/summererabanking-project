<template>
  <layout>
    <template #content>
      <Breadcum :name="nameOfPage" :routes="routes" />
      <card
        :img-src="img"
        :acc-num="accNum"
        :username="username"
        @clicked="handleLogout()"
      />
    </template>
  </layout>
</template>

<script setup>
import Layout from "@/customer/layout/Default.vue"
import Card from "../components/Profile/Card.vue"
import { ref } from "@vue/reactivity"
import { logout } from "@/shared/helper/Logout"
import Breadcum from "../components/general/Breadcum.vue"
// import { useRoute } from "vue-router"

const img = ref(require("@/customer/assets/img/fakeAvt.jpg"))
const accNum = ref(21510009999999)
const username = ref("LA MINH VU")
const nameOfPage = ref("Profile")
const routes = ref(["Profile"])

function handleLogout() {
  logout()
}
</script>

<style scoped></style>
