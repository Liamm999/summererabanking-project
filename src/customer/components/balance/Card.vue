<template>
  <div
    class="container mx-auto grid lg:grid-cols-2 w-full bg-white rounded-2xl text-black px-16 py-4"
  >
    <div class="flex flex-row items-center">
      <h4 class="text-base font-semibold mr-2">{{ accNum }}</h4>
      <p
        class="bg-purple-600 text-white inline rounded-full px-2 mt-1 text-xs font-semibold"
      >
        Default
      </p>
    </div>
    <div>
      <p class="mr-1 mt-5 lg:mt-0">Available balance</p>
      <p class="font-semibold">{{ formatPrice(amount) }}</p>
    </div>
  </div>
</template>

<script setup>
import { formatPrice } from "@/customer/helper/formatPrice"
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  amount: {
    type: Number,
    required: true,
    default: 0,
  },

  accNum: {
    type: String,
    required: true,
    default: "",
  },
})
</script>

<style lang="scss" scoped></style>
