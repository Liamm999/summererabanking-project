<template>
  <div id="account">
    <div class="heaeding flex justify-between items-center">
      <span class="text-xl ml-1 font-semibold">List Account</span>
      <div class="right mr-1">
        <button
          class="btn p-2 bg-yellow-500 rounded-lg hover:bg-yellow-400 max-sm:text-xs"
        >
          <font-awesome-icon icon="fa-solid fa-plus" style="color: #ffffff" />
          Add account
        </button>
      </div>
    </div>
    <hr class="mt-3" />

    <div class="filter flex justify-end mr-2 p-3">
      <select class="p-1 bg-slate-500">
        <option>Filter By</option>
        <option>Name</option>
        <option>Date</option>
        <option>Balance</option>
      </select>
    </div>

    <!--create accout list-->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-white">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3"><input type="checkbox" /></th>
            <th scope="col" class="px-6 py-3 text-center">Name</th>
            <th scope="col" class="px-6 py-3 text-center">Phone Number</th>
            <th scope="col" class="px-6 py-3 text-center">Date of Birth</th>
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
              <input type="checkbox" />
            </th>
            <td class="px-6 py-4 text-center">{{ customer.name }}</td>
            <td class="px-6 py-4 text-center">{{ customer.phoneNumber }}</td>
            <td class="px-6 py-4 text-center">{{ customer.dob }}</td>

            <td class="px-6 py-4 text-center">{{ customer.balance }}</td>
            <td class="px-6 py-4 text-center">{{ customer.date }}</td>
            <td class="px-6 py-4 text-center flex">
              <font-awesome-icon
                icon="fa-solid fa-pen"
                style="color: #3b7ae8"
                class="icon bg-blue-edit mr-1.5"
              />
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
export default {
  name: "Account",
  data() {
    return {
      customers: [
        {
          name: "John",
          phoneNumber: "098766784",
          dob: "12/11/2002",
          type: false,
          balance: 50000,
          date: "13/7/2020",
        },
        {
          name: "Van",
          phoneNumber: "098766784",
          dob: "12/11/2002",
          type: false,
          balance: 50000,
          date: "13/7/2020",
        },
        {
          name: "Linh",
          phoneNumber: "098766784",
          dob: "12/11/2002",
          type: false,
          balance: 50000,
          date: "13/7/2020",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
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
