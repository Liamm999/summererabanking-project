import { defineStore } from "pinia"
import { ref } from "vue"

export const useSavingStore = defineStore("saving", () => {
  const savingData = ref({
    savingAmount: 0,
    startDate: "",
    rate: 73,
  })

  const transactionTime = ref("")

  function initSavingData(data) {
    savingData.value.savingAmount = data.savingAmount
    savingData.value.startDate = data.startDate
  }

  function getSavingAmount() {
    return savingData.value.savingAmount
  }

  function getStartDate() {
    return savingData.value.startDate
  }

  return {
    initSavingData,
    getSavingAmount,
    getStartDate,
    transactionTime,
  }
})
