<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  },
});
</script>

<template>
  <button :class="`btn btn--${type}`">{{ label }}</button>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  display: block;
  width: fit-content;
  min-width: 13.75rem;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  outline: none;
  transition: 0.3s ease;
  &--secondary {
    background-color: $dark_green-200;
    color: $white;
    &:hover {
      color: $dark_green-200;
      background-color: $hover-dark;
    }
  }
}
</style>
