<template>
  <layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" :select="routes[0]" />
      <div
        class="container w-full md:grid md:grid-cols-8 xl:grid-cols-12 justify-between"
      >
        <Card
          class="mb-24 sm1:w-2/3 md:w-full md:col-span-4 xl:col-span-8"
          @checkUserAccount="handleCheckAcc"
          @continue-transfer="handleContinue"
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

// setup breadcum
const nameOfPage = ref("Transfer money")
const routes = ref(["Transfer Money"])

const isValid = ref(false)
const showInit = ref(false)
const router = useRouter()

// call api to check account name
async function handleCheckAcc(accNumber) {
  // if check acc number is valid => beneficiaryName and isvalid
  try {
    console.log(accNumber)
    isValid.value = true
  } catch (error) {
    console.error(error)
  }
}

function handleContinue() {
  if (isValid.value) {
    showInit.value = true
    router.push({ name: "Transfer Detail" })
  } else {
    showInit.value = false
  }
}
</script>

<style scoped></style>
