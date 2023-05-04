<template>
  <Layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage" />
      <div v-if="!isLoanExisted">
        <span class="relative">
          <div
            class="absolute w-full h-full bg-black opacity-60 z-10"
            :class="{ hidden: !isNext }"
          ></div>
          <Container class="mb-12 z-0" />
        </span>
        <LoanConfirmation class="mb-16" v-if="isNext" />
      </div>
      <LoanSecondary
        v-else
        class="mb-12"
        :loan-amount="loanAmount"
        @pay="handlePay"
      />
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
import LoanSecondary from "./LoanSecondary.vue"

// setup breadcum
const routes = ref(["Loan"])
const nameOfPage = ref("Money loan")

const loanStore = useLoanStore()

const isLoanExisted = ref(false)

const isNext = computed(() => {
  return loanStore.getLoanAmount() > 0
})

// TODO: call api to get loan if loan is existed (set isLoanExisted)
const loanAmount = ref(100000)

// TODO: call api to pay interest
function handlePay() {
  console.log("Payed")
}
</script>

<style lang="scss" scoped></style>
