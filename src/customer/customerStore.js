import { defineStore } from "pinia"
import { ref } from "vue"

export const useCustomerStore = defineStore("customer", () => {
  const transferData = ref({})
  function initTransferData(data) {
    transferData.value = data
  }
  function getTransferData() {
    return transferData
  }

  return { transferData, initTransferData, getTransferData }
})
