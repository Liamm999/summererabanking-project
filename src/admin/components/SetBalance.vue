<template>
  <div class="bg flex flex-col items-center py-6 px-10" v-show="hidden">
    <div>Set initial balance for "{{ username }}"?</div>
    <input class="w-3/4 mt-3 text-black" v-model="form.balance" />
    <div
      class="flex flex-row justify-between items-center text-black mt-5 font-medium"
    >
      <button
        @click="handleClick"
        type="button"
        value="Save"
        class="py-1 px-5 bg-white mr-5 hover:bg-green-300"
        :id="id"
      >
        Save
      </button>
      <button
        type="button"
        class="py-1 px-5 bg-white hover:bg-red-400"
        value="Cancel"
        @click="handleClick"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "setBalance",
  props: {
    username: String,
    id: String,
  },
  data() {
    return {
      hidden: true,
      form: {
        new: false,
        balance: "",
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
    async handleClick(event) {
      console.log("id", event.target.id)
      if (event.target.value == "Save") {
        await axios
          .post(`admin/ ${event.target.id}/setBalance`, this.form)
          .then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error.message)
          })
        window.location.reload()
        this.hidden = !this.hidden
      } else if (event.target.value == "Cancel") {
        console.log("No")
        this.hidden = !this.hidden
      } else {
        console.log("next")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bg {
  background-color: #443c68be;
}
</style>
