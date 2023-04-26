<template>
  <Layout>
    <template #content>
      <Breadcum :name="nameOfPage" :routes="routes" />
      <Container />
    </template>
  </Layout>
</template>

<script setup>
import { ref } from "vue"
import Breadcum from "../components/general/Breadcum.vue"
import Container from "../components/balance/Container.vue"
import Layout from "../layout/Default.vue"

// setup breadcum
const routes = ref(["View Balance"])
const nameOfPage = ref("Balance")
</script>

<style lang="scss" scoped></style>
