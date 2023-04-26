<template>
  <layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" :select="routes[1]" />
      <InitTransfer :username="username" @continue="checkData" />
    </template>
  </layout>
</template>

<script setup>
import { ref, computed } from "vue"
import Breadcum from "@/customer/components/general/Breadcum.vue"
import Layout from "@/customer/layout/Default.vue"
import InitTransfer from "@/customer/components/transfer/initial/InitTransfer.vue"
import { useCustomerStore } from "@/customer/customerStore"

// setup breadcum
const nameOfPage = ref("Transaction Detail")
const customerStore = useCustomerStore()
const routes = ref(["Transfer Money", "Detail"])

// TODO: return the current username
const username = computed(() => {
  return "LA MINH VU"
})

function checkData(data) {
  if (data.amountMoney <= 0) {
    alert("The amount of money must greater than 0")
  } else {
    customerStore.initTransferData(data)
    console.log(customerStore.getTransferData())
  }
}
</script>

<style lang="scss" scoped></style>
