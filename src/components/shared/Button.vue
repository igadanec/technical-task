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
  to: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button v-if="!to" :class="`btn btn--${type}`">{{ label }}</button>
  <router-link v-else :to="to" :class="`btn btn--${type}`">{{
    label
  }}</router-link>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  display: block;
  width: fit-content;
  min-width: 11.25rem;
  padding: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  outline: none;
  transition: 0.3s ease;
  text-decoration: none;
  @media (min-width: $viewport-tablet) {
    min-width: 13.75rem;
  }
  &--primary {
    color: $dark_green-200;
    background-color: $white;
    &:hover {
      color: $white;
      background-color: $dark_green-200;
    }
  }
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
