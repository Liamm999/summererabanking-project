<template>
  <Layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage"></Breadcum>
      <CardFrame title="Transaction History">
        <template #cardContent>
          <InforElement :logData="logData" />
        </template>
      </CardFrame>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed } from "vue"
import InforElement from "../components/Log/InforElement.vue"
import CardFrame from "../components/general/CardFrame.vue"
import Layout from "../layout/Default.vue"
import Breadcum from "../components/general/Breadcum.vue"

// setup breadcum
const routes = ref(["Log"])
const nameOfPage = ref("Transaction Log")

// TODO: call api to get the transaction data here:
const logData = computed(() => {
  return [
    {
      money: "+500.000 VND",
      time: "29/04/2023",
      message:
        "Test transaction log, Test transaction log, Test transaction log, Test transaction log, Test transaction log",
      isPlus: true,
    },
    {
      money: "-500.000 VND",
      time: "29/04/2023",
      message: "Test transaction log",
      isPlus: false,
    },
    {
      money: "+500.000 VND",
      time: "29/04/2023",
      message: "Test ",
      isPlus: true,
    },
  ]
})
</script>

<style lang="scss" scoped></style>
