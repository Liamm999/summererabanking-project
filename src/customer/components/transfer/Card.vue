<template>
  <div
    class="w-full h-72 bg-white rounded-2xl text-black py-14 px-10 z-20 left-0 right-0 ml-auto mr-auto"
  >
    <span
      class="w-full grid grid-cols-12 border-slate-500 border-b-2 leading-9"
    >
      <Input
        class="col-start-1 col-end-12"
        :placeholder="inputPlaceholder"
        :value="value"
        @update-input="setAccountValue"
      />
      <Button
        class="col-start-12 text-purple-600 text-end"
        :placeholder="checkPlaceholder"
        @clicked="checkUserAccount"
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
      :placeholder="continuePlaceholder"
      :is-grad="true"
      @clicked="testButton"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Input from "../general/Input.vue"
import Button from "../general/Button.vue"
import { computed } from "@vue/reactivity"

const inputPlaceholder = ref("Enter account number")
const checkPlaceholder = ref("Check")
const continuePlaceholder = ref("Continue")
const value = ref("")
const beneficiaryName = ref("")

const isFilled = computed(() => {
  if (value.value === "") {
    return false
  }
  return true
})

function testButton() {
  console.log("button clicked")
}

function setAccountValue(newAccount) {
  console.log(newAccount)
  value.value = newAccount
}

// TODO: Check account name
async function checkUserAccount() {
  // call api to check account name
  console.log(value.value)
}
</script>

<style lang="scss" scoped></style>
