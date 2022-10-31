<script setup>
import { Form, configure } from "vee-validate";
configure({
  validateOnBlur: false,
});
</script>

<template>
  <Form v-slot="props">
    <slot v-bind="props"></slot>
  </Form>
</template>

<style lang="scss" scoped></style>
