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
import { ref, onMounted } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Card from "@/customer/components/card/Card.vue"

const routes = ref(new Array())
localStorage.setItem("routesArray", JSON.stringify(routes.value))

onMounted(() => {
  const today = ref(new Date())
  const date =
    today.value.getFullYear() +
    "/" +
    (today.value.getMonth() + 1) +
    "/" +
    today.value.getDate()
  const time =
    today.value.getHours() +
    ":" +
    today.value.getMinutes() +
    ":" +
    today.value.getSeconds()
  const thisTime = `${time} on ${date}`
  localStorage.setItem("loginTime", thisTime)
})
</script>

<style lang="scss" scoped></style>
