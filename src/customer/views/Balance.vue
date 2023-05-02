<template>
  <Loading :is-hidden="isLoading" />
  <Layout>
    <template #content>
      <Breadcum :name="nameOfPage" :routes="routes" />
      <Container
        :available-balance="availableBalance"
        :total-balance="totalBalance"
      />
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, watch } from "vue"
import Loading from "@/shared/components/Loading.vue"
import Breadcum from "../components/general/Breadcum.vue"
import Container from "../components/balance/Container.vue"
import Layout from "../layout/Default.vue"
import axios from "axios"

// setup breadcum
const routes = ref(["View Balance"])
const nameOfPage = ref("Balance")
const currentUser = ref({})
const isLoading = ref(false)

const availableBalance = computed(() => {
  getCurrentUser()
  return currentUser.value.balance
})

const totalBalance = computed(() => {
  getCurrentUser()
  return currentUser.value.balance
})

async function getCurrentUser() {
  const currentUserId = Number(JSON.parse(localStorage.getItem("loginUser")).id)
  try {
    let res = await axios({
      method: "get",
      url: `http://localhost:8080/user/${currentUserId}`,
      withCredentials: true,
    })

    let data = res.data
    currentUser.value = data
    isLoading.value = true
    return data
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

watch(
  () => currentUser.value.balance,
  (balance) => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser.value))
    console.log(balance)
  }
)
</script>

<style lang="scss" scoped></style>
