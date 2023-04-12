<template>
  <div class="flex flex-col items-end">
    <div class="flex items-end">
      <div class="text flex flex-col items-end mr-5">
        <h4 class="text-sm font-semibold">Hello</h4>
        <h3 class="text-lg">{{ username }}</h3>
      </div>
      <div @click="showPopup()" class="image cursor-pointer">
        <img class="w-16 h-16 rounded-full" :src="imgSrc" />
      </div>
    </div>
    <Popup
      class="popup absolute z-10 w-32 h-20 top-full rounded-lg -mt-6 underline cursor-pointer"
      content="Logout"
      @clicked="handleLogout()"
      :is-hidden="checkHidden"
      href="/login"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Popup from "../general/Popup.vue"
import { logout } from "@/shared/helper/Logout"

const checkHidden = ref(true)

// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
    default: () => require("@/customer/assets/img/fakeAvt.jpg"),
  },

  username: {
    type: String,
    required: true,
    default: "",
  },
})

function showPopup() {
  if (checkHidden.value) checkHidden.value = false
  else checkHidden.value = true
}

function handleLogout() {
  logout()
  console.log("logout")
}
</script>

<style lang="scss" scoped>
.popup {
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
