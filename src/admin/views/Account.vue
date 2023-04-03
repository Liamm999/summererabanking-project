<template>
  <!--Show list account screen-->
  <div id="account">
    <div class="heaeding flex justify-between items-center">
      <!--Title of the screen-->
      <span class="text-xl ml-1 font-semibold">List Account</span>
      <div class="right mr-1">
        <!--Click button to change to Add account screen -->
        <button
          class="btn p-2 bg-yellow-500 rounded-lg hover:bg-yellow-400 max-sm:text-xs"
        >
          <font-awesome-icon icon="fa-solid fa-plus" style="color: #ffffff" />
          Add account
        </button>
      </div>
    </div>
    <hr class="mt-3" />

    <!--Filter table by name, date or balance-->
    <div class="filter flex justify-end mr-2 p-3">
      <select class="p-1 bg-slate-500">
        <Filter v-for="type in filterType" :key="type" :data="type" />
      </select>
    </div>

    <!--create a table for account list-->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-white">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3 text-center">Name</th>
            <th scope="col" class="px-6 py-3 text-center">Phone Number</th>
            <th scope="col" class="px-6 py-3 text-center">Date of Birth</th>
            <th scope="col" class="px-6 py-3 text-center">Type</th>
            <th scope="col" class="px-6 py-3 text-center">
              Initial Balance
              <br />
              <span class="text-center">VND</span>
            </th>
            <th scope="col" class="px-6 py-3 text-center">Starting Date</th>
            <th scope="col" class="px-6 py-3 text-center">More</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b"
            v-for="(customer, index) in customers"
            :key="index"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </th>
            <td class="px-6 py-4 text-center">{{ customer.name }}</td>
            <td class="px-6 py-4 text-center">{{ customer.phoneNumber }}</td>
            <td class="px-6 py-4 text-center">{{ customer.dob }}</td>

            <!--If type is false -> return red button-->
            <td class="px-6 py-4 text-center" v-if="customer.type == false">
              <button class="bg-red-500 py-2 px-6 rounded-lg">Wait</button>
            </td>

            <!--If type is true -> return green button-->
            <td class="px-6 py-4 text-center" v-else>
              <button class="bg-green-400 py-2 px-4 rounded-lg">Confirm</button>
            </td>
            <td class="px-6 py-4 text-center">{{ customer.balance }}</td>
            <td class="px-6 py-4 text-center">{{ customer.date }}</td>

            <!--Create delete and edit button -->
            <td class="px-6 py-4 text-center flex">
              <!--Click edit button to change to edit screen-->
              <font-awesome-icon
                icon="fa-solid fa-pen"
                style="color: #3b7ae8"
                class="icon bg-blue-edit mr-1.5"
              />

              <!--Click delete button to delete account-->
              <font-awesome-icon
                icon="fa-regular fa-trash-can"
                style="color: #f32b81"
                class="icon bg-pink-trash"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Filter from "../components/Filter.vue"
import axios from "axios"
export default {
  name: "Account",
  data() {
    return {
      filterType: ["Filter by", "Name", "Date", "Balance"],
      customers: [],
      fetchingCustomer: false,
      url: "http://localhost:8080/",
    }
  },
  components: { Filter },
  methods: {
    async fetchAllCustomer() {
      ;(await axios.get(`${this.url}user/`)).then((response) => {
        console.log(response.data)
      })
    },
  },
  async mounted() {
    
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  padding: 10px;

  @media screen and (max-width: 1015px) {
    flex-direction: row;
    width: 9px;
    height: 9px;
    padding: 5px;
  }
}
</style>
