<template>
  <Layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" />
      <div>
        <span class="relative">
          <div
            class="absolute w-full h-full bg-black opacity-60 z-10"
            :class="{ hidden: !isNext }"
          ></div>
          <Container class="mb-12 z-0" />
        </span>
        <LoanConfirmation class="mb-16" v-if="isNext" />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { ref, computed } from "vue"
import Breadcum from "@/customer/components/general/Breadcum.vue"
import Layout from "@/customer/layout/Default.vue"
import Container from "@/customer/components/Loan/Container.vue"
import LoanConfirmation from "./LoanConfirmation.vue"
import { useLoanStore } from "@/customer/store/loanStore"

// setup breadcum
const routes = ref(["Loan"])
const nameOfPage = ref("Money loan")

const loanStore = useLoanStore()

const isNext = computed(() => {
  return loanStore.getLoanAmount() > 0
})
</script>

<style lang="scss" scoped></style>
