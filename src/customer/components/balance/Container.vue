<template>
  <div class="px-4 sm1:px-8 mx-auto">
    <Heading :total="totalBalance" @drop-button-clicked="handleDropdown" />
    <div
      class="container bg-gray-200 rounded-b-2xl sm1:px-36 py-16"
      :class="isShow ? 'show' : 'hide'"
    >
      <Card :amount="availableBalance" :acc-num="accNum" class="" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity"
import Heading from "./Heading.vue"
import Card from "./Card.vue"

const availableBalance = ref(12452161223)
const accNum = ref(21510009999999)
const isShow = ref(false)

const totalBalance = computed(() => {
  // TODO: return total balance from every resoure
  return 12452161223
})

function handleDropdown(value) {
  if (value === true) {
    isShow.value = true
  } else {
    isShow.value = false
  }
}
</script>

<style lang="scss" scoped>
.show {
  @apply block;
}

.hide {
  @apply hidden;
}
</style>
