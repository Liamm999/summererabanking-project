<template>
  <layout>
    <template #content>
      <card :img-src="img" :acc-num="accNum" :username="username" />
    </template>
  </layout>
</template>

<script setup>
import Layout from "@/customer/layout/Default.vue"
import Card from "../components/general/Card.vue"
import { ref } from "@vue/reactivity"
// import { useRoute } from "vue-router"

const img = ref(require("@/customer/assets/img/fakeAvt.jpg"))
const accNum = ref(21510009999999)
const username = ref("LA MINH VU")
</script>

<style scoped></style>
