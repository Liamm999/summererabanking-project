<template>
  <div class="w-2/3 border border-white rounded-2xl max-lg:w-full max-lg:mx-3">
    <div class="heaeding flex flex-col mt-3">
      <!--Title of the screen-->
      <span class="title text-xl ml-5 font-semibold">ADD ACCOUNT</span>
      <hr class="mt-3 w-full" />
    </div>
    <div class="max-lg:hidden">
      <form
        class="text-white flex justify-center"
        v-on:submit.prevent="submitForm"
      >
        <div
          class="login w-5/6 p-3 pt-8 pb-5 flex flex-col items-center h-auto mt-1"
        >
          <!--Customer full name-->
          <div class="fullname w-1/2 pt-1 flex justify-between items-center">
            <span class="text-sm max-sm1:text-sx">Full name: </span>
            <input
              type="text"
              class="w-3/5 h-10 text-black rounded-md text-center"
              placeholder="Nguyen Van A"
              name="fullname"
              v-model="form.name"
            />
          </div>
          <!--Customer phone number-->
          <div
            class="fullname mt-6 w-1/2 pt-1 flex justify-between items-center"
          >
            <span class="text-sm">Phone number:</span>
            <input
              type="text"
              class="w-3/5 h-10 text-black rounded-md text-center"
              placeholder="0982067865"
              name="phoneNumber"
              v-model="form.username"
            />
          </div>

          <!--Customer password-->
          <div
            class="fullname mt-6 w-1/2 pt-1 flex justify-between items-center"
          >
            <span class="text-sm">Date of birth: </span>
            <input
              type="text"
              class="w-3/5 h-10 text-black rounded-md text-center"
              name="fullname"
              placeholder="12/11/2002"
              v-model="form.dob"
            />
          </div>

          <!--Customer password-->
          <div
            class="fullname mt-6 w-1/2 pt-1 flex justify-between items-center"
          >
            <span class="text-sm">Password: </span>
            <input
              type="password"
              class="w-3/5 h-10 text-black rounded-md text-center"
              placeholder="********"
              name="password"
              v-model="form.password"
            />
          </div>
          <span class="text-red-500 pt-4" v-show="warning"
            >Invalid information</span
          >

          <!--Submit button-->
          <div class="w-3/5 flex justify-evenly items-center mt-6">
            <button
              type="submit"
              class="bg-yellow-btn hover:bg-orange-500 mt-3 py-2 px-10 rounded-lg text-white"
            >
              Save
            </button>
            <button
              type="submit"
              class="bg-red-cancle hover:bg-red-800 mt-3 py-2 px-9 rounded-lg text-white"
              @click="handleCancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="hideForm w-full pl-8 pt-3 lg:hidden">
      <form class="text-black" v-on:submit.prevent="submitForm">
        <div class="login flex flex-col items-center h-72 mt-2">
          <!--Input for username-->
          <div
            class="username w-3/4 pt-4 border-b border-black flex items-center"
          >
            <font-awesome-icon icon="fa-regular fa-user" style="color: white" />
            <input
              type="text"
              class="ml-3 w-full h-8 text-center rounded-md"
              placeholder="Nguyen Van A"
              name="fullname"
              v-model="form.name"
            />
          </div>
          <!--Input for phone number-->
          <div
            class="username w-3/4 pt-4 border-b border-black flex items-center"
          >
            <font-awesome-icon icon="fa-solid fa-phone" style="color: white" />
            <input
              type="text"
              class="ml-3 w-full h-8 text-center rounded-md"
              placeholder="0982117652"
              name="phoneNumber"
              v-model="form.username"
            />
          </div>
          <!--Input for date of birth-->
          <div
            class="username w-3/4 pt-4 border-b border-black flex items-center"
          >
            <font-awesome-icon
              icon="fa-solid fa-cake-candles"
              style="color: white"
            />
            <input
              type="text"
              class="ml-3 w-full h-8 text-center rounded-md"
              placeholder="12/11/2002"
              name="dob"
              v-model="form.dob"
            />
          </div>
          <!--Input for password-->
          <div
            class="password w-3/4 pt-4 border-b border-black flex items-center"
          >
            <font-awesome-icon icon="fa-solid fa-lock" style="color: white" />
            <input
              type="password"
              class="ml-3 w-full h-8 text-center rounded-md"
              placeholder="*******"
              name="password"
              v-model="form.password"
              :class="[form.password.length < 5 ? error : null]"
            />
          </div>
          <span class="text-red-500 pt-2" v-show="warning"
            >Invalid information</span
          >
          <div class="w-full flex justify-around items-center mt-6">
            <button
              type="submit"
              class="bg-yellow-btn hover:bg-orange-500 mt-3 py-2 px-5 rounded-lg text-white text-sm"
            >
              Save
            </button>
            <button
              type="submit"
              class="bg-red-cancle hover:bg-red-800 mt-3 py-2 px-5 rounded-lg text-white text-sm"
              @click="handleCancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Table add account",
  data() {
    return {
      form: {
        username: "",
        name: "",
        password: "",
        dob: "",
      },
      warning: false,
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
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-family: Open Sans, "Courier New", Courier, monospace;
}

.hideForm {
  margin: 0 2%;
}

.hideForm form {
  width: 50vw;
  height: auto;
  padding: 2%;
}

@media screen and (max-width: 640px) {
  .hideForm {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .hideForm form {
    width: auto;
    margin: 4%;
  }

  .note {
    height: fit-content;
    width: fit-content;
    padding: 0;
    font-size: 11px;
  }

  .option {
    font-size: 10px;
  }
  input {
    background-color: rgba(240, 248, 255, 0.79);
  }
}

@media screen and (min-width: 640px) and (max-width: 1025px) {
  .hideForm {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .hideForm form {
    width: 100%;
    margin: 4%;
  }

  .note {
    height: fit-content;
    width: fit-content;
    padding: 0;
    font-size: 8px;
  }

  .option {
    font-size: 10px;
  }
  input {
    background-color: rgba(240, 248, 255, 0.79);
  }

  .error {
    border: 2px solid red;
  }
}
</style>
