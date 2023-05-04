<template>
  <Layout>
    <template #content>
      <Breadcum :routes="routes" :name="nameOfPage"></Breadcum>
      <SourceAccount
        class="mb-12"
        :saving-list="savingList"
        @handle-delete="deleteSaving"
      />
      <div class="relative">
        <span
          class="absolute w-full h-full bg-black opacity-60 z-10"
          :class="{ hidden: !isShown }"
        ></span>
        <SavingDetail class="mb-12 z-0" />
      </div>
      <SavingConfirmation class="mb-16" :class="{ hidden: !isShown }" />
    </template>
  </Layout>
</template>

<script setup>
import { ref, watch } from "vue"
import Layout from "@/customer/layout/Default.vue"
import Breadcum from "@/customer/components/general/Breadcum.vue"
import SourceAccount from "@/customer/components/saving/SourceAccount.vue"
import SavingDetail from "@/customer/components/saving/SavingDetail.vue"
import SavingConfirmation from "./SavingConfirmation.vue"
import { useSavingStore } from "@/customer/store/savingStore"

// setup breadcum
const routes = ref(["Saving"])
const nameOfPage = ref("Money Saving")
const isShown = ref(false)

const savingStore = useSavingStore()
watch(
  () => savingStore.getSavingAmount(),
  (amount) => {
    if (amount >= 100000) {
      isShown.value = true
      window.scrollTo(0, 600)
    }
  }
)

// get saving balance and set isShown (update saving balance here too)
const savingList = ref([
  {
    id: 0,
    amount: 100000,
  },
  {
    id: 1,
    amount: 30000000,
  },
  {
    id: 2,
    amount: 100000000,
  },
])

// TODO: call api to delete Saving here
function deleteSaving(id) {
  console.log(id)
}
</script>

<style lang="scss" scoped></style>
