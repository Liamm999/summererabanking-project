<template>
  <div class="container mx-auto mt-16">
    <Header :phone-number="phoneNumber"></Header>
    <div
      class="content-container grid gap-4 grid-cols-3 bg-slate-400 rounded-b-2xl py-9 px-10"
    >
      <Element
        v-for="element in 6"
        :key="element"
        class="text-center"
      ></Element>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue"
import Element from "./Element.vue"
import { ref } from "vue"

const phoneNumber = ref("0123456789")
</script>

<style lang="scss" scoped></style>
