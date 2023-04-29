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
import { getCurrentTime } from "../helper/getCurrentTime"

// const routes = ref(new Array())
// localStorage.setItem("routesArray", JSON.stringify(routes.value))

function setCurrentUser() {
  const currentUser = ref({
    id: 0,
    username: "LA MINH VU",
    accountNumber: "012345678",
  })
  localStorage.setItem("currentUser", JSON.stringify(currentUser.value))
}

onMounted(() => {
  setCurrentUser()
  const thisTime = getCurrentTime()
  localStorage.setItem("loginTime", thisTime)
})
</script>

<style lang="scss" scoped></style>
