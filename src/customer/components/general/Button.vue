<template>
  <div>
    <button type="submit" @click="handleClick" :class="{ gradBtn: isGrad }">
      {{ placeholder }}
    </button>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emit = defineEmits(["clicked"])

// eslint-disable-next-line no-undef, no-unused-vars
const props = defineProps({
  placeholder: {
    type: String,
    require: true,
    default: "",
  },

  isGrad: {
    type: Boolean,
    require: false,
    default: false,
  },
})

function handleClick() {
  emit("clicked")
}
</script>

<style lang="scss" scoped></style>
