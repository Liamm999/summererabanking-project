<template>
  <div id="account">
    <div class="heaeding flex justify-between items-center">
      <span class="text-xl ml-1 font-semibold">List Account</span>
      <div class="right">
        <button class="btn p-2 bg-yellow-500 rounded-lg hover:bg-yellow-400">
          Add account
        </button>
      </div>
    </div>
    <hr class="mt-3" />

    <div class="filter flex justify-end mr-2 p-3">
      <select class="p-2 bg-slate-500">
        <option>Filter By</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>

    <!--create accout list-->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-white dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
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
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
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
            <td class="px-6 py-4 text-center">
              <button class="px-4 py-2 mr-1 bg-cyan-200 rounded-lg">edit</button>
              <button class="p-2 mr-1 bg-red-500 rounded-lg">delete</button>
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

<style lang="scss" scoped></style>
