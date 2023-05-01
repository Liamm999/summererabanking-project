<template>
  <CardFrame title="Source Account">
    <template #cardContent>
      <p>Account Number:</p>
      <p
        class="font-semibold text-purple-600 text-xl border-slate-500 border-b-2 mx leading-9"
      >
        {{ accNumber }}
      </p>
      <span class="w-full flex flex-row md:justify-end">
        <p class="mr-2">Available Balance:</p>
        <p class="">{{ availBalance }}</p></span
      >
    </template>
  </CardFrame>
</template>

<script setup>
import CardFrame from "../general/CardFrame.vue"
import { formatPrice } from "@/customer/helper/formatPrice"

const accNumber = JSON.parse(localStorage.getItem("currentUser")).accountNumber
// const availBalance = JSON.parse(
//   localStorage.getItem("currentUser")
// ).balance
const availBalance = formatPrice(100000000000)
</script>

<style lang="scss" scoped></style>
