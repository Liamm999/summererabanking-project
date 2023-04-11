<template>
  <!--Show list account screen-->
  <div id="account" class="relative z-0">
    <div class="heaeding flex justify-between items-center">
      <!--Title of the screen-->
      <span class="text-xl ml-1 font-semibold">Account List</span>
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
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-full">
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
            <td class="px-6 py-4 text-center">{{ customer.username }}</td>
            <td class="px-6 py-4 text-center">{{ customer.dob }}</td>

            <!--If type is false -> return red button-->
            <td class="px-6 py-4 text-center" v-if="customer.type == 'Wait'">
              <button class="bg-red-500 py-2 px-6 rounded-lg">Wait</button>
            </td>

            <!--If type is true -> return green button-->
            <td class="px-6 py-4 text-center" v-else>
              <button class="bg-green-400 py-2 px-4 rounded-lg">Confirm</button>
            </td>
            <td class="px-6 py-4 text-center">{{ customer.balance }}</td>
            <td class="px-6 py-4 text-center">{{ customer.startingDate }}</td>

            <!--Create delete and edit button -->
            <td class="px-6 py-4">
              <div class="flex flex-row px-1 w-auto h-auto">
                <!--Click edit button to change to edit screen-->
                <button>
                  <font-awesome-icon
                    icon="fa-solid fa-pen"
                    style="color: #3b7ae8"
                    class="icon bg-blue-edit mr-1.5"
                  />
                </button>

                <!--Click delete button to delete account-->
                <button
                  data-toggle="modal"
                  @click="getUser(customer) in customers"
                  type="button"
                >
                  <font-awesome-icon
                    icon="fa-regular fa-trash-can"
                    style="color: #f32b81"
                    class="icon bg-pink-trash"
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="absolute top-1/2 left-1/3 max-sm:left-12">
      <DeletePopUp
        ref="delete"
        :username="this.username"
        v-show="confirmDelete"
        :id="this.id"
      />
    </div>
  </div>
</template>

<script>
import Filter from "../components/Filter.vue"
import DeletePopUp from "../components/DeletePopUp.vue"
import axios from "axios"
export default {
  name: "Account",
  data() {
    return {
      filterType: ["Filter by", "Name", "Date", "Balance"],
      customers: [],
      confirmDelete: false,
      username: "",
      id: "",
      localTime: " ",
    }
  },
  components: { Filter, DeletePopUp },
  created() {
    this.fetchAllCustomer()
  },
  methods: {
    async fetchAllCustomer() {
      console.log(this.$cookies.get("jwt"))
      await axios
        .get(`user/`, {
          withCredentials: true,
        })
        .then((res) => {
          this.customers = res.data.allUser
          console.log(res.data)
        })
        .catch((err) => {
          console.log("error", err)
        })
    },
    getUser(customer) {
      console.log(customer.id)
      this.username = customer.username
      this.id = customer.id
      this.confirmDelete = !this.confirmDelete

      if (this.confirmDelete == true) {
        this.$refs.delete.handleClick()
      }
      // await axios
      //   .get("user/" + customer.id, { withCredentials: true })
      //   .then((response) => {
      //     console.log(response.data)
      //   })
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
