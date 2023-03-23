<template>
  <div class="bg-element-purple rounded-2xl p-6">
    <font-awesome-icon class="text-5xl mb-4" :icon="classIcon" />
    <h4 class="text-xl font-semibold">{{ elementName }}</h4>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  elementName: {
    type: String,
    required: true,
  },
})

const classIcon = computed(() => {
  return `fa-solid ${props.icon}`
})
</script>

<style lang="scss" scoped></style>
