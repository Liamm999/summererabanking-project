<template>
  <CardFrame title="Deposite confirmation">
    <template #cardContent>
      <div>
        <span>
          <InforCard class="mb-12" :valueObject="accountInfors" />
          <InforCard class="mb-12" :valueObject="savingInfors" />
          <InforCard class="mb-12" :valueObject="notes" />
        </span>
        <span
          class="w-full md:w-2/3 flex flex-row justify-between align-middle mx-auto"
        >
          <Button
            :is-grad="true"
            placeholder="cancel"
            @clicked="cancelSaving"
          />
          <Button
            :is-grad="true"
            placeholder="Confirm"
            @clicked="confirmSaving"
          />
        </span>
      </div>
    </template>
  </CardFrame>
</template>

<script setup>
import { computed } from "vue"
import { formatPrice } from "@/customer/helper/formatPrice"
import { useSavingStore } from "@/customer/store/savingStore"
import CardFrame from "@/customer/components/general/CardFrame.vue"
import InforCard from "@/customer/components/general/InforCard.vue"
import Button from "@/customer/components/general/Button.vue"

const currentuser = JSON.parse(localStorage.getItem("currentUser"))
const savingStore = useSavingStore()

const accountInfors = computed(() => [
  {
    tag: "Saving account:",
    content: currentuser.username,
    isHighlighted: true,
  },
  {
    tag: "Saving user:",
    content: currentuser.name,
    isHighlighted: false,
  },
])

const savingInfors = computed(() => [
  {
    tag: "Saving amount:",
    content: formatPrice(savingStore.getSavingAmount()),
    isHighlighted: true,
  },
])

const notes = computed(() => [
  {
    tag: "",
    content:
      "If you withdraw your money before the due date, You will lose all interest and be penalized 5% of the principal amount ",
  },
])

// TODO: call api to do transaction here
function confirmSaving() {
  alert("Confirm Saving")
}

function cancelSaving() {
  alert("Cancel!")
  location.reload()
}
</script>

<style lang="scss" scoped></style>
