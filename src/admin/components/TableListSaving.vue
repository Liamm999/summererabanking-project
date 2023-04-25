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
      class="relative overflow-x-auto shadow-md sm:rounded-lg max-lg:h-4/5 h-5/6 mt-5 mb-5 p-3"
    >
      <table class="w-full text-sm text-left text-white">
        <thead
          class="text-xs text-gray-700 uppercase bg-purple-savings sticky top-0"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3 text-center">Savings</th>
            <th scope="col" class="px-6 py-3 text-center">Rate</th>
            <th scope="col" class="px-6 py-3 text-center">Started at</th>
            <th scope="col" class="px-6 py-3 text-center">Finished at</th>
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
            <td class="px-6 py-4 text-center">{{ customer.saving }}</td>
            <td class="px-6 py-4 text-center">{{ customer.rate }}</td>
            <td class="px-6 py-4 text-center">{{ customer.startedAt }}</td>
            <td class="px-6 py-4 text-center">{{ customer.finishedAt }}</td>

            <td class="px-6 py-4 flex justify-center">
              <div class="flex flex-row px-1 w-auto h-auto">
                <!--Click edit button to change to edit screen-->
                <button @click="handleEdit(customer) in customerSaving">
                  <font-awesome-icon
                    icon="fa-solid fa-pen"
                    style="color: #3b7ae8"
                    class="icon bg-blue-edit mr-1.5 hover:bg-slate-300"
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
                    class="icon bg-pink-trash hover:bg-red-300"
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="popUp">
      <SetRate
        ref="setBalance"
        :username="this.username"
        v-show="showSetRate"
        :id="this.newId"
      />
    </div>
    <div class="popUp">
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
import SetRate from "./SetRate.vue"
import DeletePopUp from "./DeletePopUp.vue"
export default {
  name: "Table add account",
  props: {
    title: String,
  },
  components: {
    SetRate,
    DeletePopUp,
  },
  data() {
    return {
      showSetRate: false,
      confirmDelete: false,
      customerSaving: [
        {
          id: 1,
          saving: "1.000.000",
          rate: "4%",
          startedAt: "20/4/2020",
          finishedAt: "20/4/2021",
        },
        {
          id: 2,
          saving: "2.000.000",
          rate: "5%",
          startedAt: "25/12/2019",
          finishedAt: "25/12/2021",
        },
        {
          id: 3,
          saving: "3.000.000",
          rate: "6%",
          startedAt: "20/4/2020",
          finishedAt: "20/4/2021",
        },
      ],
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
  position: absolute;
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
    top: 20%;
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
</style>
