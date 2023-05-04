<template>
  <CardFrame title="Source Account">
    <template #cardContent>
      <div class="mb-8">
        <p>Account Number:</p>
        <p
          class="font-semibold text-purple-600 text-xl border-slate-500 border-b-2 mx leading-9"
        >
          {{ accNumber }}
        </p>
      </div>
      <div class="mb-8">
        <p>Your remaining loan:</p>
        <p
          class="font-semibold text-purple-600 text-xl border-slate-500 border-b-2 mx leading-9"
        >
          {{ formatPrice(loanAmount) }}
        </p>
      </div>
      <div class="mb-8">
        <span v-if="isDue">
          <p class="text-red-500">
            Your payment is due, the amount you have to pay in this period is:
          </p>
          <p
            class="font-semibold mb-8 text-purple-600 text-xl border-slate-500 border-b-2 mx leading-9"
          >
            {{ formatPrice(dueAmount) }}
          </p>
          <Button :isGrad="true" placeholder="pay" @clicked="pay" />
        </span>
        <span v-else>
          <p class="text-red-500">Your payment is not due yet</p>
        </span>
      </div>
    </template>
  </CardFrame>
</template>

<script setup>
import Button from "@/customer/components/general/Button.vue"
import CardFrame from "@/customer/components/general/CardFrame.vue"
import { formatPrice } from "@/customer/helper/formatPrice"
import { computed } from "vue"

const curentUser = JSON.parse(localStorage.getItem("currentUser"))
const emit = defineEmits(["pay"])

const accNumber = computed(() => curentUser.username)
const isDue = computed(() => props.dueAmount > 0)

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  loanAmount: {
    type: Number,
    required: true,
  },
  dueAmount: {
    type: Number,
    default: 0,
  },
})

function pay() {
  emit("pay")
}
</script>

<style lang="scss" scoped></style>
