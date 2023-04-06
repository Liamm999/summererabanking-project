<template>
  <div>
    <Heading :total="totalBalance" @drop-button-clicked="handleDropdown" />
    <div
      class="container bg-gray-200 rounded-b-2xl px-36 py-16"
      :class="isShow ? 'show' : 'hide'"
    >
      <Card :amount="availableBalance" :acc-num="accNum" />
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
  if (value === "fa-chevron-down") {
    isShow.value = false
  } else {
    isShow.value = true
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
