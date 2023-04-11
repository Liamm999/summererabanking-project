<template>
  <div class="container mx-auto mt-10 mb-16">
    <div class="flex items-baseline">
      <font-awesome-icon
        icon="fa-solid fa-chevron-left"
        @click="handleBackOneRoute"
        class="hover:text-purple-600 cursor-pointer text-xl mr-4"
      />
      <div class="direction">
        <h3 class="mb-2">{{ name }}</h3>
        <span class="flex items-center gap-2">
          <font-awesome-icon icon="fa-solid fa-house" />
          <p
            class="hover:text-purple-600 cursor-pointer opacity-50"
            @click="handleBackToDashboard"
          >
            Dashboard
          </p>
          <p>/</p>
          <span
            class="direction flex"
            :class="{ chosen: isLast }"
            v-for="(route, index) in routes"
            :key="index"
            @click="handleBackward(index)"
          >
            <p
              class="hover:text-purple-600 opacity-50"
              :class="{ pointer: !isLast }"
            >
              {{ route }}
            </p>
            <p :class="{ hidden: isLast }">&nbsp;/</p>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { computed } from "@vue/reactivity"

const router = useRouter()
const route = useRoute()

// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  routes: {
    type: Array,
    require: true,
  },

  name: {
    type: String,
    require: true,
    default: "",
  },
})

const isLast = computed(() => {
  return props.routes[props.routes.length - 1].includes(route.name)
})

function handleBackward(index) {
  console.log(index)
  if (!isLast.value) {
    router.go((index + 1) * -1)
  }
}

function handleBackToDashboard() {
  router.push("/customer/dashboard")
}

function handleBackOneRoute() {
  window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/")
}
</script>

<style lang="scss" scoped>
.chosen {
  @apply opacity-100 text-purple-600 cursor-default;
}

.pointer {
  @apply cursor-pointer;
}
</style>
