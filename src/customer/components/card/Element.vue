<template>
  <div class="bg-element-purple rounded-2xl p-6">element</div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>
