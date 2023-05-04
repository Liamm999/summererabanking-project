<template>
  <div v-for="(savingBalance, index) in savingList" :key="index">
    <p class="font-bold">Saving balance {{ index + 1 }}:</p>
    <span
      class="w-full flex flex-row items-center border-slate-500 border-b-2 mx leading-9"
    >
      <p class="font-semibold text-purple-600 text-xl">
        {{ formatBalance(savingBalance.amount) }}
      </p>
      <font-awesome-icon
        class="mr-0 ml-auto text-xl hover:text-purple-600"
        icon="fa-solid fa-delete-left"
        @click="handleDeleteSaving(savingBalance.id)"
      />
    </span>
    <span
      class="w-full flex flex-col mb-2 sm1:m-0 sm1:flex-row sm1:justify-end"
    >
      <p class="mr-2">Your saving balance for the next day is:</p>
      <p class="sm1:text-purple-600 font-semibold">
        {{ formatIncomingBalance(savingBalance.amount) }}
      </p>
    </span>
  </div>
</template>

<script setup>
import { formatPrice } from "@/shared/helper/formatPrice"

const emit = defineEmits(["delete"])

function formatBalance(value) {
  return formatPrice(Number(value))
}

function formatIncomingBalance(value) {
  const balance = Number(value)
  return formatPrice(balance + balance * (0.02 / 100))
}

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  savingList: Array,
})

function handleDeleteSaving(id) {
  emit("delete", id)
}
</script>

<style lang="scss" scoped></style>
