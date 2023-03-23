<template>
  <div class="container mx-auto mt-16">
    <Header :phone-number="phoneNumber"></Header>
    <div
      class="content-container grid gap-12 grid-cols-3 bg-slate-400 rounded-b-2xl py-16 px-10"
    >
      <Element
        v-for="element in iconArr"
        :key="element"
        :element-name="element.elName"
        :icon="element.icon"
        :route="element.route"
        class="text-center"
      ></Element>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue"
import Element from "./Element.vue"
import { ref } from "vue"

const iconArr = ref([
  {
    elName: "Transfer money",
    icon: "fa-money-bill-transfer",
    route: "",
  },

  {
    elName: "Withdraw money",
    icon: "fa-wallet",
    route: "/customer/withdraw",
  },

  {
    elName: "Deposite money",
    icon: "fa-money-bill",
  },

  {
    elName: "View balance",
    icon: "fa-scale-balanced",
  },

  {
    elName: "Money saving",
    icon: "fa-piggy-bank",
  },

  {
    elName: "Money loan",
    icon: "fa-landmark",
  },
])

const phoneNumber = ref("0123456789")
</script>

<style lang="scss" scoped></style>
