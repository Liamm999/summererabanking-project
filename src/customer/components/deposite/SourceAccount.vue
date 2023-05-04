<template>
  <CardFrame title="Source Account">
    <template #cardContent>
      <div class="mb-2">
        <p>Account Number:</p>
        <p
          class="font-semibold text-purple-600 text-xl border-slate-500 border-b-2 mx leading-9"
        >
          {{ accNumber }}
        </p>
        <span class="w-full flex flex-row md:justify-end">
          <p class="mr-2">Available Balance:</p>
          <p class="text-purple-600 font-semibold">{{ availBalance }}</p>
        </span>
      </div>
      <DepositeList :deposite-list="depositeList" @delete="handleDelete" />
    </template>
  </CardFrame>
</template>

<script setup>
import CardFrame from "../general/CardFrame.vue"
import { formatPrice } from "@/customer/helper/formatPrice"
import { computed } from "vue"
import DepositeList from "./DepositeList.vue"

const emit = defineEmits(["handleDelete"])

const curentUser = JSON.parse(localStorage.getItem("currentUser"))
const availBalance = computed(() => formatPrice(curentUser.balance))

const accNumber = computed(() => curentUser.username)

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  depositeList: Array,
})

function handleDelete(id) {
  emit("handleDelete", id)
}
</script>

<style lang="scss" scoped></style>
