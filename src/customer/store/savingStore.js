import { defineStore } from "pinia"
import { ref } from "vue"

export const useSavingStore = defineStore("saving", () => {
  const savingData = ref({
    SavingAmount: 0,
    rate: 0,
    month: 0,
  })

  const transactionTime = ref("")

  function initSavingData(data) {
    savingData.value.SavingAmount = data.SavingAmount
    savingData.value.rate = data.rate
    savingData.value.month = data.month
  }

  function getSavingAmount() {
    return savingData.value.SavingAmount
  }

  function getSavingRate() {
    return savingData.value.rate
  }

  function getSavingMonth() {
    return savingData.value.month
  }

  // return total interest
  function getTotalInterest() {}

  return {
    initSavingData,
    getSavingAmount,
    getSavingMonth,
    getSavingRate,
    transactionTime,
    getTotalInterest,
  }
})
