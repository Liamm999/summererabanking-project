<template>
  <layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" />
      <div class="container w-full grid grid-cols-12 justify-between">
        <Card class="col-span-8" />
        <Contacts class="col-start-10 col-span-3" />
      </div>
    </template>
  </layout>
</template>

<script setup>
import { ref } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Breadcum from "../components/general/Breadcum.vue"
import Card from "../components/transfer/Card.vue"
import Contacts from "../components/transfer/Contacts.vue"

const nameOfPage = ref("Transfer money")
const routes = JSON.parse(localStorage.getItem("routesArray"))
routes.push("Transfer money")
</script>

<style scoped></style>
