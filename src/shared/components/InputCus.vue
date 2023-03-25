<template>
  <input
    :type="type"
    class="ml-3 w-full h-8"
    :placeholder="placeholder"
    :name="name"
  />
</template>

<script scoped>
// eslint-disable-next-line no-undef, no-unused-vars
export default {
  name: "inputCustom",
  props: {
    type: {
      type: String,
      required: true,
    },

    placeholder: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
