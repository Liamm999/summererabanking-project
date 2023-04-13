<template>
  <div
    class="w-full h-72 bg-white rounded-2xl text-black py-14 px-10 z-20 left-0 right-0 ml-auto mr-auto"
  >
    <span
      class="w-full grid grid-cols-12 border-slate-500 border-b-2 leading-9"
    >
      <Input
        class="col-start-1 col-end-12"
        placeholder="Enter account number"
        :value="accNumber"
        @update-input="setAccountValue"
      />
      <Button
        class="col-start-12 text-purple-600 text-end"
        placeholder="Check"
        @clicked="handleCheckUserAcc"
      />
    </span>
    <span class="checkText">
      <p v-if="!isFilled" class="warning text-red-500 text-sm">
        Please enter beneficiary account number
      </p>
      <p v-else class="text-purple-500 font-semibold">{{ beneficiaryName }}</p>
    </span>

    <Button
      class="w-full flex justify-end mt-16"
      placeholder="Continue"
      :is-grad="true"
      @clicked="handleContinue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Input from "../general/Input.vue"
import Button from "../general/Button.vue"
import { computed } from "@vue/reactivity"

const accNumber = ref("")
const beneficiaryName = ref("")
const emit = defineEmits(["continueTransfer", "checkUserAccount"])

const isFilled = computed(() => {
  if (accNumber.value === "") {
    return false
  }
  return true
})

// check if the bank acc is valid => continue the process
function handleContinue() {
  emit("continueTransfer")
}

function setAccountValue(newAccount) {
  console.log(newAccount)
  accNumber.value = newAccount
}

// TODO: Check account name
function handleCheckUserAcc() {
  emit("checkUserAccount", accNumber.value)
}
</script>

<style lang="scss" scoped></style>
