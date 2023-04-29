<template>
  <CardFrame title="Information">
    <template #cardContent>
      <span
        class="flex flex-col md:flex-row justify-between align-middle mb-24"
      >
        <span class="block w-full md:w-1/2">
          <InputMoney
            class="w-full border-slate-500 border-b-2 leading-9"
            placeholder="How much you want to save ?"
            :value="amountMoney"
            @updateInput="setAmountMoney"
            @formatMoney="parsedMoney"
            @formatOriginal="returnOriginalMoney"
          />
          <p class="text-red-500 text-sm">(Min: 1m VND, Max: 100m VND)</p>
        </span>
        <InputOption label="Choose rate and time" :values="values" />
      </span>
      <Button
        placeholder="Continue"
        :is-grad="true"
        @clicked="handleContinue"
      />
    </template>
  </CardFrame>
</template>

<script setup>
import { ref } from "vue"
import CardFrame from "../general/CardFrame.vue"
import InputOption from "../general/InputOption.vue"
import InputMoney from "../general/InputMoney.vue"
import Button from "../general/Button.vue"

const amountMoney = ref()
const originalMoney = ref(0)

const values = ref([
  {
    rate: 9,
    month: 12,
  },
  {
    rate: 10,
    month: 18,
  },
  {
    rate: 11,
    month: 24,
  },
  {
    rate: 12,
    month: 30,
  },
  {
    rate: 13,
    month: 36,
  },
])

function setAmountMoney(value) {
  amountMoney.value = value
  originalMoney.value = Number(value)
}

function parsedMoney(value) {
  amountMoney.value = value
}

function returnOriginalMoney(value) {
  if (value) {
    amountMoney.value = value
  } else {
    amountMoney.value = 0
  }
}

function handleContinue() {}
</script>

<style lang="scss" scoped></style>
