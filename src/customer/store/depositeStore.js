import { defineStore } from "pinia"
import { ref } from "vue"

export const useDepositeStore = defineStore("deposite", () => {
  const depositeData = ref({
    depositeAmount: 0,
    rate: 0,
    duration: 0,
    startDate: "",
  })

  const transactionTime = ref("")

  function initDepositeData(data) {
    depositeData.value.depositeAmount = data.depositeAmount
    depositeData.value.rate = data.rate
    depositeData.value.month = data.month
  }

  function getDepositeAmount() {
    return depositeData.value.depositeAmount
  }

  function getLoanRate() {
    return depositeData.value.rate
  }

  function getLoanDuration() {
    return depositeData.value.duration
  }

  function getStartDate() {
    return depositeData.value.startDate
  }

  function getTotalMoneyWhenDue() {}

  return {
    initDepositeData,
    getDepositeAmount,
    getLoanDuration,
    getLoanRate,
    getTotalMoneyWhenDue,
    transactionTime,
    getStartDate,
  }
})
