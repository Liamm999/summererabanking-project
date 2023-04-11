<template>
  <div v-if="hideButton" class="flex flex-col">
    <Navbar />
    <VTextMarquee speed="80"
      ><span
        >Your money is safe with us. Click to have more services
      </span></VTextMarquee
    >
    <VTextMarquee speed="90" class="max-lg:hidden">
      <div class="flex flex-row">
        <div
          v-for="n in 2"
          :key="n"
          class="flex justify-center items-center h-full w-full pr-32"
        >
          <div class="relative flex justify-center">
            <img
              id="image"
              src="../assets/img/tree_finance.png"
              class="h-auto w-auto"
              @click="
                ;(triggerFade = !triggerFade) && (hideButton = !hideButton)
              "
            />
            <span class="absolute top-1/2 left-1/2">Click me</span>
          </div>
        </div>
      </div>
    </VTextMarquee>

    <div class="flex flex-row justify-center items-center">
      <div class="flex justify-center items-center h-auto w-auto lg:hidden">
        <div class="relative flex justify-center items-center">
          <img
            id="image"
            src="../assets/img/tree_finance.png"
            class="h-auto w-auto"
            @click=";(triggerFade = !triggerFade) && (hideButton = !hideButton)"
          />
          <span class="absolute top-1/2 left-1/2">Click me</span>
        </div>
      </div>
    </div>
  </div>
  <SlideInOut entry="right" exit="left" :duration="500"
    ><Dashboard v-show="triggerFade"
  /></SlideInOut>
</template>

<script>
import { VTextMarquee } from "vue-text-marquee"
import Navbar from "@/shared/components/Navbar.vue"
import { SlideInOut } from "vue3-transitions"
import Dashboard from "./Dashboard.vue"
export default {
  name: "Homepage",
  data() {
    return {
      triggerFade: false,
      hideButton: true,
    }
  },
  components: {
    SlideInOut,
    Navbar,
    VTextMarquee: VTextMarquee,
    Dashboard,
  },
}
</script>

<style lang="scss" scoped>
label {
}
</style>
