<template>
  <div id="saving" class="h-full">
    <div class="heaeding flex justify-between items-center">
      <!--Title of the screen-->

      <span class="text-xl ml-1 font-semibold">LIST SAVING & LOANS</span>
    </div>
    <hr class="mt-3" />
    <!--Filter table by name, date or balance-->
    <div class="filter flex justify-end mr-2 p-3">
      <select class="p-1 bg-slate-500">
        <FilterVue v-for="type in filterType" :key="type" :data="type" />
      </select>
    </div>
    <div class="flex flex-row justify-center max-lg:flex-col h-4/5">
      <!--create a table for list saving-->
      <div
        class="relative overflow-x-auto shadow-md sm:rounded-lg max-lg:h-3/4 h-5/6"
      >
        <table class="w-full text-sm text-left text-white">
          <thead
            class="text-xs text-gray-700 uppercase bg-purple-savings sticky top-0"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3 text-center">Phone Number</th>
              <th scope="col" class="px-6 py-3 text-center">Savings</th>
              <th scope="col" class="px-6 py-3 text-center">Type</th>
              <th scope="col" class="px-6 py-3 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b"
              v-for="(customer, index) in customerSaving"
              :key="index"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ index + 1 }}
              </th>
              <td class="px-6 py-4 text-center">{{ customer.name }}</td>
              <td class="px-6 py-4 text-center">{{ customer.saving }}</td>

              <!--If type is false -> return red button-->
              <td class="px-6 py-4 text-center" v-if="customer.saving <= 2">
                <div class="bg-gray-400 py-2 px-6 rounded-lg">
                  {{ customer.type }}
                </div>
              </td>

              <!--If type is true -> return green button-->
              <td class="px-6 py-4 text-center" v-else>
                <div class="bg-yellow-400 py-2 px-4 rounded-lg">
                  {{ customer.type }}
                </div>
              </td>

              <!--Create delete and edit button -->
              <td class="px-6 py-4 text-center">
                <!--Click edit button to change to edit screen-->
                <button @click="handleSaving(customer) in customerSaving">
                  <font-awesome-icon
                    icon="fa-solid fa-pen"
                    style="color: #3b7ae8"
                    class="icon bg-blue-edit mr-1.5 hover:bg-slate-300"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--create table for List Loan-->
      <div
        class="relative overflow-x-auto shadow-md sm:rounded-lg max-lg:h-2/3 ml-4 max-lg:ml-0 max-lg:mt-2 h-5/6"
      >
        <table class="w-full text-sm text-left text-white">
          <thead
            class="text-xs text-gray-700 uppercase bg-yellow-loans sticky top-0"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3 text-center">Phone Number</th>
              <th scope="col" class="px-6 py-3 text-center">Number</th>
              <th scope="col" class="px-6 py-3 text-center">Loans</th>
              <th scope="col" class="px-6 py-3 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b"
              v-for="(customer, index) in customerLoans"
              :key="index"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ index + 1 }}
              </th>
              <td class="px-6 py-4 text-center">{{ customer.name }}</td>
              <td class="px-6 py-4 text-center">{{ customer.number }}</td>

              <td class="px-6 py-4 text-center">{{ customer.loans }}</td>

              <!--Create delete and edit button -->
              <td class="px-6 py-4 text-center">
                <!--Click edit button to change to edit screen-->
                <button @click="handleLoans(customer) in customers">
                  <font-awesome-icon
                    icon="fa-solid fa-pen"
                    style="color: #3b7ae8"
                    class="icon bg-blue-edit mr-1.5 hover:bg-slate-300"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import FilterVue from "../components/Filter.vue"
export default {
  name: "Saving",
  components: {
    FilterVue,
  },
  data() {
    return {
      customerSaving: [
        { id: 1, name: "0982117284", saving: "1", type: "Silver" },
        { id: 2, name: "0982062604", saving: "4", type: "Gold" },
        { id: 3, name: "0982062604", saving: "4", type: "Gold" },
        { id: 4, name: "0982062604", saving: "4", type: "Gold" },
        { id: 5, name: "0982062604", saving: "4", type: "Gold" },
      ],
      customerLoans: [
        { id: 1, name: "0982117287", loans: "150000", number: "1" },
        { id: 2, name: "0982062604", loans: "200000", number: "0" },
        { id: 3, name: "0982062604", loans: "200000", number: "0" },
      ],
      filterType: ["Filter by", "Type", "Savings", "Loans"],
    }
  },
  methods: {
    handleLoans: function () {
      console.log("details loans")
      this.$router.push(`/admin/loans/details?id=${this.customerLoans.id}`)
    },
    handleSaving: function (customer) {
      console.log("details saving")
      console.log(customer.id)
      this.$router.push(`/admin/saving/details?id=${customer.id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  line-height: 100px;
  vertical-align: middle;
  padding: 10px;

  @media screen and (max-width: 1015px) {
    padding: 5px;
  }
}
</style>
