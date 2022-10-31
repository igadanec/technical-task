<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "",
  },
  valid: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event) => {
  const target = event.target;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="name"
    :name="name"
    :id="name"
    class="form-input"
    spellcheck="false"
    @input="handleInput"
  />
</template>

<style lang="scss">
.form-input {
  display: block;
  width: 100%;
  padding: 15px 0;
  border: 0;
  border-bottom: 1px solid $grey-100;
  background: transparent;
  outline: none;
  font-size: 14px;
  transition: 0.3s ease;
  &::placeholder {
    color: transparent;
    visibility: hidden;
  }
}
</style>
