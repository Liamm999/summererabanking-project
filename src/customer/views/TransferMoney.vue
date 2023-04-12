<template>
  <layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" />
      <div
        class="container w-full md:grid md:grid-cols-8 xl:grid-cols-12 justify-between"
      >
        <Card class="mb-24 sm1:w-2/3 md:w-full md:col-span-4 xl:col-span-8" />
        <Contacts
          class="mb-12 sm1:w-2/3 sm1:mx-auto md:w-full md:col-start-6 xl:col-start-10 col-span-3"
        />
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
