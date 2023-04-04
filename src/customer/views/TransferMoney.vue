<template>
  <layout>
    <template #content>
      <div class="container mx-auto mt-10">
        <Heading :routes="routes" />
        <div class="container w-full grid grid-cols-12 justify-between mt-16">
          <Card class="col-span-7" />
          <Contacts class="col-start-9 col-span-4" />
        </div>
      </div>
    </template>
  </layout>
</template>

<script setup>
// import { ref } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Heading from "../components/Heading.vue"
import Card from "../components/transfer/Card.vue"
import Contacts from "../components/transfer/Contacts.vue"

const routes = JSON.parse(localStorage.getItem("routesArray"))
routes.push("Transfer money")
</script>

<style scoped></style>
