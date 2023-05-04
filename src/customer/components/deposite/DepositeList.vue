<template>
  <div
    v-for="(depositeBalance, index) in depositeList"
    :key="index"
    class="mb-8"
  >
    <p class="font-bold">Deposite balance {{ index + 1 }}:</p>
    <span
      class="w-full flex flex-row items-center border-slate-500 border-b-2 mx leading-9"
    >
      <p class="font-semibold text-purple-600 text-xl">
        {{ formatBalance(depositeBalance.amount) }}
      </p>
      <font-awesome-icon
        class="mr-0 ml-auto text-xl hover:text-purple-600"
        icon="fa-solid fa-delete-left"
        @click="handleDeleteDeposite(depositeBalance.id)"
      />
    </span>
  </div>
</template>

<script setup>
import { formatPrice } from "@/shared/helper/formatPrice"

const emit = defineEmits(["delete"])

function formatBalance(value) {
  return formatPrice(Number(value))
}

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  depositeList: Array,
})

function handleDeleteDeposite(id) {
  emit("delete", id)
}
</script>

<style lang="scss" scoped></style>
