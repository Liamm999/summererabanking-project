<template>
  <layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" :select="routes[0]" />
      <div
        class="container w-full md:grid md:grid-cols-8 xl:grid-cols-12 justify-between"
      >
        <Card
          class="mb-24 sm1:w-2/3 md:w-full md:col-span-4 xl:col-span-8"
          :is-checked="isValid"
          @checkUserAccount="handleCheckAcc"
          @continue-transfer="handleContinue"
          :beneficiary-name="toUsername"
        />
        <Contacts
          class="mb-12 sm1:w-2/3 sm1:mx-auto md:w-full md:col-start-6 xl:col-start-10 col-span-3"
        />
      </div>
    </template>
  </layout>
</template>

<script setup>
import { ref } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Breadcum from "../../components/general/Breadcum.vue"
import Card from "../../components/transfer/Card.vue"
import Contacts from "../../components/transfer/Contacts.vue"
import { useRouter } from "vue-router"
import { useTransferStore } from "@/customer/store/transferStore"
import axios from "axios"

// setup breadcum
const nameOfPage = ref("Transfer money")
const routes = ref(["Transfer Money"])

const router = useRouter()
const transferStore = useTransferStore()
const isValid = ref(false)
const showInit = ref(false)
const toUsername = ref("")

// call api to check account name
async function handleCheckAcc(accNumber) {
  // if check acc number is valid => beneficiaryName and isvalid
  try {
    let res = await axios({
      method: "get",
      url: `http://localhost:8080/user/getuser/${accNumber}`,
      withCredentials: true,
    })

    let data = res.data
    if (data.name) {
      transferStore.toAccount = accNumber
      toUsername.value = data.name
      transferStore.toUsername = toUsername.value
      isValid.value = true
      console.log(data.name)
    }
  } catch (error) {
    alert("Account is not exit")
  }
}

function handleContinue() {
  if (isValid.value) {
    showInit.value = true
    router.push({ name: "Transfer Detail" })
  } else {
    alert("Please check the account first!")
    showInit.value = false
  }
}
</script>

<style scoped></style>
