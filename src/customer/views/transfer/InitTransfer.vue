<template>
  <layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" :select="routes[1]" />
      <RouterLink to="/customer/dashboard/transfer/init/confirm"
        >Confirm</RouterLink
      >
      <RouterView />
    </template>
  </layout>
</template>

<script setup>
import { ref } from "vue"
import Breadcum from "@/customer/components/general/Breadcum.vue"
import Layout from "@/customer/layout/Default.vue"

// setup breadcum
const nameOfPage = ref("Transaction Initialization")
const routes = ref(["Transfer Money", "Initialization"])
</script>

<style lang="scss" scoped></style>
