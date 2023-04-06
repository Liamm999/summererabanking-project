<template>
  <div
    class="container flex flex-row justify-between items-center bg-white rounded-t-2xl text-black px-36 py-2"
  >
    <span
      ><h4 class="text-xl font-semibold">Account in VND</h4>
      <span>
        <p class="inline mr-1">Total balance:</p>
        <p class="inline font-semibold text-purple-600">
          {{ formatPrice(total) }}
        </p>
      </span>
    </span>
    <Button :icon="icon" :style="btnStyle" @clicked="handleClickBtn" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Button from "../general/Button.vue"
import { formatPrice } from "@/customer/helper/formatPrice"

const emit = defineEmits(["dropButtonClicked"])
const btnStyle = ref(
  "rounded-full bg-white w-10 h-10 shadow-black shadow-2xl drop-shadow-2xl"
)

const icon = ref("fa-chevron-down")
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // this total balance is the total money from available balance + deposit + saving money
  total: {
    type: String,
    required: true,
    default: "0",
  },
})

function handleClickBtn() {
  if (icon.value === "fa-chevron-down") {
    icon.value = "fa-chevron-up"
  } else {
    icon.value = "fa-chevron-down"
  }
  emit("dropButtonClicked", icon.value)
}
</script>

<style lang="scss" scoped></style>
