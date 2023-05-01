<template>
  <div
    class="container w-full bg-gray-300 mx-auto rounded-xl p-3 mb-6"
    v-for="log in logData"
    :key="log.money"
  >
    <span class="flex flex-col my-2 md:my-0 sm1:flex-row justify-between px-8">
      <p class="capitalize" :class="log.isPlus ? 'plus' : 'minus'">
        {{ log.money }}
      </p>
      <span
        class="flex flex-row gap-6 text-sm md:text-base justify-between items-center"
      >
        <p class="font-semibold capitalize text-purple-600">
          {{ log.time }}
        </p>
      </span>
    </span>
    <span class="flex flex-row flex-wrap w-full break-words px-8 py-1">
      <p class="font-bold mr-2">Information:</p>
      <p>{{ log.message }}</p>
    </span>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  logData: {
    type: Array,
    required: true,
    default: () => [
      {
        money: "",
        time: "",
        message: "",
        isPlus: false,
      },
    ],
  },
})
</script>

<style lang="scss" scoped>
.plus {
  @apply text-green-500;
}

.minus {
  @apply text-red-500;
}
</style>
