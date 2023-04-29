<template>
  <Layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" />
      <Container />
    </template>
  </Layout>
</template>

<script setup>
import { ref } from "vue"
import Layout from "../layout/Default.vue"
import Breadcum from "../components/general/Breadcum.vue"
import Container from "../components/Log/Container.vue"

// setup breadcum
const routes = ref(["Log"])
const nameOfPage = ref("Transaction Log")
</script>

<style lang="scss" scoped></style>
