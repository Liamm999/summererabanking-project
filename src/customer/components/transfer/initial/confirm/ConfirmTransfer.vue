<template>
  <CardFrame title="Confirm your transaction">
    <template #cardContent>
      <div class="flex flex-col">
        <InforCard :valueObject="accountInfors" class="mb-12" />
        <InforCard :valueObject="amountMoney" class="mb-12" />
        <InforCard :valueObject="timeAndMessage" class="mb-12" />
        <span class="flex flex-row">
          <Button
            placeholder="Cancel"
            :is-grad="true"
            class="mx-auto"
            @clicked="cancelTransaction()"
          />
          <Button
            placeholder="Confirm"
            :is-grad="true"
            class="mx-auto"
            @clicked="confirmTransaction()"
          />
        </span>
      </div>
    </template>
  </CardFrame>
</template>

<script setup>
import { computed } from "vue"
import CardFrame from "@/customer/components/general/CardFrame.vue"
import Button from "@/customer/components/general/Button.vue"
import InforCard from "@/customer/components/general/InforCard.vue"
import { useTransferStore } from "@/customer/store/transferStore"
import { useRouter } from "vue-router"
import { formatPrice } from "@/customer/helper/formatPrice"

const customerStore = useTransferStore()
const router = useRouter()

const accountInfors = computed(() => {
  const toAccount = customerStore.toAccount
  const toUsername = customerStore.toUsername
  const fromAccount = customerStore.getTransferData().value.fromAccount
  return [
    {
      tag: "From account:",
      content: fromAccount,
      isHighlighted: false,
    },
    {
      tag: "To account:",
      content: toAccount,
      isHighlighted: true,
    },
    {
      tag: "Beneficiary's username:",
      content: toUsername,
      isHighlighted: true,
    },
  ]
})

const amountMoney = computed(() => {
  const amount = customerStore.getTransferData().value.amountMoney
  return [
    {
      tag: "Transaction amount:",
      content: formatPrice(Number(amount)),
      isHighlighted: true,
    },
  ]
})

const timeAndMessage = computed(() => {
  const time = customerStore.getTransferData().value.currentTime
  const message = customerStore.getTransferData().value.message
  return [
    {
      tag: "Transaction time:",
      content: time,
      isHighlighted: false,
    },
    {
      tag: "Transaction message:",
      content: message,
      isHighlighted: false,
    },
  ]
})

// TODO: call api to do transaction here
function confirmTransaction() {
  alert("Confirm Transaction")
}

function cancelTransaction() {
  alert("Cancel Transaction!")
  router.push("/customer/dashboard/transfer")
}
</script>

<style lang="scss" scoped></style>
