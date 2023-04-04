<template>
  <Layout>
    <template #content>
      <div class="">
        <Card></Card>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Card from "@/customer/components/card/Card.vue"

const routes = ref(new Array())
localStorage.setItem("routesArray", JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
