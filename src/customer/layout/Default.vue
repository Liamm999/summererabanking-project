<template>
  <div>
    <div
      class="header bg-slate-50 py-4 grid grid-cols-3 text-on-white place-items-center"
    >
      <div class="blank"></div>
      <logo />
      <profile />
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import logo from "../components/navBar/Logo.vue"
import profile from "../components/navBar/Profile.vue"
</script>

<style lang="scss" scoped></style>
