<template>
  <Layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage"></Breadcum>
      <SourceAccount
        class="mb-12"
        :deposite-list="depositeList"
        @handle-delete="deleteDeposite"
      />
      <div class="relative">
        <span
          class="absolute w-full h-full bg-black opacity-60 z-10"
          :class="{ hidden: !isShown }"
        ></span>
        <DepositeDetail class="mb-12 z-0" />
      </div>
      <DepositeConfirmation class="mb-16" :class="{ hidden: !isShown }" />
    </template>
  </Layout>
</template>

<script setup>
import { ref } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Breadcum from "@/customer/components/general/Breadcum.vue"
import SourceAccount from "@/customer/components/deposite/SourceAccount.vue"
import DepositeDetail from "@/customer/components/deposite/DepositeDetail.vue"
import DepositeConfirmation from "./DepositeConfirmation.vue"
import { useDepositeStore } from "@/customer/store/depositeStore"

// setup breadcum
const routes = ref(["Deposite"])
const nameOfPage = ref("Deposite")
const isShown = ref(false)

// eslint-disable-next-line no-unused-vars
const depositeStore = useDepositeStore()

// get deposite balance and set isShown (update deposite balance here too)
const depositeList = ref([
  {
    id: 0,
    amount: 100000,
  },
  {
    id: 1,
    amount: 30000000,
  },
  {
    id: 2,
    amount: 100000000,
  },
])

// TODO: call api to delete deposite here
function deleteDeposite(id) {
  console.log(id)
}
</script>

<style lang="scss" scoped></style>
