<template>
  <div class="w-2/3 border border-white rounded-2xl max-lg:w-full max-lg:mx-3">
    <div class="heaeding flex flex-col mt-3">
      <!--Title of the screen-->
      <div class="flex flex-row pl-2 item-center ml-3">
        <button @click="handleCancel">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            style="color: #ffffff"
            class="text-center"
          />
        </button>
        <span class="title text-xl ml-5 font-semibold"
          >Account: {{ title }}</span
        >
      </div>
      <hr class="mt-3 w-full" />
    </div>
    <!--create a table for list saving-->
    <div
      class="relative overflow-x-auto shadow-md sm:rounded-lg max-lg:h-4/5 h-5/6 mt-5 mb-2 p-3"
    >
      <table class="w-full text-sm text-left text-white">
        <thead
          class="text-xs text-gray-700 uppercase bg-purple-savings sticky top-0"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3 text-center">Loan</th>
            <th scope="col" class="px-6 py-3 text-center">Rate</th>
            <th scope="col" class="px-6 py-3 text-center">Started at</th>
            <th scope="col" class="px-6 py-3 text-center">Finished at</th>
            <th scope="col" class="px-6 py-3 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ customer.id }}
            </th>
            <td class="px-6 py-4 text-center">{{ customer.loan }}</td>
            <td class="px-6 py-4 text-center">{{ customer.rate }}</td>
            <td class="px-6 py-4 text-center">{{ customer.startedAt }}</td>
            <td class="px-6 py-4 text-center">{{ customer.finishedAt }}</td>

            <td class="px-6 py-4 flex justify-center">
              <div class="flex flex-row px-1 w-auto h-auto">
                <!--Click delete button to delete account-->
                <button
                  data-toggle="modal"
                  @click="getUser(customer) in customers"
                  type="button"
                >
                  <font-awesome-icon
                    icon="fa-regular fa-trash-can"
                    style="color: #f32b81"
                    class="icon bg-pink-trash hover:bg-red-300"
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="bg flex flex-col pt-3 px-10 mt-5">
        <div class="flex flex-row">
          <div>Rate:</div>
          <select v-model="selected" class="ml-3 text-black">
            <option disabled value="Please select one">
              Please select one
            </option>
            <option>6%</option>
            <option>7%</option>
            <option>8%</option>
          </select>
        </div>
        <div
          class="flex flex-row justify-evenly items-center text-black mt-8 font-medium"
        >
          <button
            @click="handleClick"
            type="button"
            value="Save"
            class="py-1 px-8 bg-yellow-btn mr-5 hover:bg-green-300 rounded-md"
            :id="id"
          >
            Save
          </button>
          <button
            type="button"
            class="py-1 px-7 bg-red-cancle hover:bg-red-400 rounded-md"
            value="Cancel"
            @click="handleCancel"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="popUp absolute max-sm:left-12">
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
import axios from "axios"
import DeletePopUp from "./DeletePopUp.vue"
export default {
  name: "Table list loan",
  props: {
    title: String,
  },
  components: {
    DeletePopUp,
  },
  data() {
    return {
      showSetRate: false,
      confirmDelete: false,
      customer: {
        id: 1,
        loan: "1.000.000",
        rate: "4%",
        startedAt: "20/4/2020",
        finishedAt: "20/4/2021",
      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue)
      },
    },
  },
  methods: {
    async submitForm() {
      await axios
        .post("user/signup", this.form)
        .then((response) => {
          console.log(response.data)
          this.$router.push("/admin/dashboard")
        })
        .catch((err) => {
          console.log("error:" + err.message)
          this.warning = !this.warning
        })
    },
    handleCancel() {
      this.$router.push("/admin/dashboard")
    },
    getUser(customer) {
      console.log(customer.id)
      this.id = customer.id
      this.username = this.title
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
    handleEdit() {
      this.showSetRate = !this.showSetRate
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Open Sans, "Courier New", Courier, monospace;
}

.popUp {
  top: 40%;
  left: 40%;
}
@media screen and (max-width: 640px) {
  .popUp {
    position: absolute;
    top: 40%;
    left: 18%;
  }
}

@media screen and (min-width: 641px) and (max-width: 1280px) {
  .popUp {
    position: absolute;
    top: 40%;
    left: 30%;
  }
}

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
