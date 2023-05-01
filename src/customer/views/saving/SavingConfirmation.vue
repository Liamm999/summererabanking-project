<template>
  <CardFrame title="Loan confirmation">
    <template #cardContent>
      <div>
        <span>
          <InforCard class="mb-12" :valueObject="accInfors" />
          <InforCard class="mb-12" :valueObject="loanData" />
          <InforCard class="mb-12" :valueObject="transactionData" />
        </span>
        <span
          class="w-full md:w-2/3 flex flex-row justify-between align-middle mx-auto"
        >
          <Button :is-grad="true" placeholder="cancel" @clicked="cancelLoan" />
          <Button
            :is-grad="true"
            placeholder="Confirm"
            @clicked="confirmLoan"
          />
        </span>
      </div>
    </template>
  </CardFrame>
</template>

<script setup>
// import { ref, computed } from "vue"
// import { formatPrice } from "@/customer/helper/formatPrice"
// import { useSavingStore } from "@/customer/store/savingStore"
import CardFrame from "@/customer/components/general/CardFrame.vue"
import InforCard from "@/customer/components/general/InforCard.vue"
import Button from "@/customer/components/general/Button.vue"

// TODO: call api to do transaction here
function confirmLoan() {
  alert("Confirm Loan")
}

function cancelLoan() {
  alert("Cancel!")
  location.reload()
}
</script>

<style lang="scss" scoped></style>
