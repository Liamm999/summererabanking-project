<template>
  <div
    class="bg flex flex-col py-6 px-10 max-sm:py-2 max-sm:px-2"
    v-show="hidden"
  >
    <div>Delete account "{{ username }}"</div>
    <div
      class="flex flex-row justify-between max-sm:justify-around items-center text-black mt-5 font-medium"
    >
      <button
        @click="handleClick"
        type="button"
        value="Yes"
        class="py-1 px-5 bg-white mr-5 hover:bg-green-300"
        :id="id"
      >
        Yes
      </button>
      <button
        type="button"
        class="py-1 px-5 bg-white hover:bg-red-400"
        value="No"
        @click="handleClick"
      >
        No
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "delete",
  props: {
    username: String,
    id: String,
  },
  data() {
    return {
      hidden: true,
      customers: [],
    }
  },
  methods: {
    handleClick(event) {
      if (event.target.value == "Yes") {
        axios
          .delete(`user/ ${event.target.id}`, { withCredentials: true })
          .then((res) => {
            console.log(res.data)
          })
        window.location.reload()
        this.hidden = !this.hidden
      } else if (event.target.value == "No") {
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
