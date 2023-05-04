<template>
  <Loading :is-hidden="isLoading" />
  <Layout>
    <template #content>
      <Breadcum :name="nameOfPage" :routes="routes" />
      <span class="container flex flex-row justify-end px-8 mb-5">
        <button
          class="bg-white text-black p-3 px-4 rounded-full"
          @click="getCurrentUser()"
        >
          <font-awesome-icon class="text-lg" icon="fa-solid fa-arrows-rotate" />
        </button>
      </span>
      <Container
        :available-balance="availableBalance"
        :total-balance="totalBalance"
      ></Container>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue"
import Loading from "@/shared/components/Loading.vue"
import Breadcum from "../components/general/Breadcum.vue"
import Container from "../components/balance/Container.vue"
import Layout from "../layout/Default.vue"
import axios from "axios"

// setup breadcum
const routes = ref(["View Balance"])
const nameOfPage = ref("Balance")
const currentUser = ref({})
const isLoading = ref()

onMounted(async () => {
  await getCurrentUser()
})

const availableBalance = computed(() => {
  return currentUser.value.balance
})

const totalBalance = computed(() => {
  return currentUser.value.balance
})

async function getCurrentUser() {
  isLoading.value = false
  const currentUserId = Number(JSON.parse(localStorage.getItem("loginUser")).id)
  try {
    let res = await axios({
      method: "get",
      url: `${process.env.VUE_APP_ROOT_API}/user/${currentUserId}`,
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
