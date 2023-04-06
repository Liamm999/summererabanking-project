<template>
  <Layout>
    <template #content>
      <Heading :name="nameOfPage" :routes="routes" />
      <Container />
    </template>
  </Layout>
</template>

<script setup>
import { ref } from "vue"
import Heading from "../components/general/Heading.vue"
import Container from "../components/balance/Container.vue"
import Layout from "../layout/Default.vue"

const nameOfPage = ref("Balance")

const routes = JSON.parse(localStorage.getItem("routesArray"))
routes.push("View Balance")
</script>

<style lang="scss" scoped></style>
