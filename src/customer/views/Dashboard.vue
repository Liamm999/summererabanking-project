<template>
  <Layout>
    <template #content>
      <div class="mb-12">
        <Card v-if="isDone"></Card>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Card from "@/customer/components/card/Card.vue"
import { getCurrentTime } from "../helper/getCurrentTime"
import axios from "axios"

const isDone = ref(false)

onMounted(async () => {
  if (!localStorage.getItem("currentUser")) {
    await getCurrentUser()
  } else {
    isDone.value = true
  }
  const thisTime = getCurrentTime()
  localStorage.setItem("loginTime", thisTime)
})

async function getCurrentUser() {
  const currentUserId = Number(JSON.parse(localStorage.getItem("loginUser")).id)
  try {
    let res = await axios({
      method: "get",
      url: `${process.env.VUE_APP_ROOT_API}/user/${currentUserId}`,
      withCredentials: true,
    })

    let data = res.data
    console.log(data)
    localStorage.setItem("currentUser", JSON.stringify(data))
    isDone.value = true
    return data
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}
</script>

<style lang="scss" scoped></style>
