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
  <textarea
    :value="modelValue"
    :placeholder="name"
    :type="type"
    :name="name"
    :id="name"
    class="form-textarea"
    spellcheck="false"
    @input="handleInput"
  />
</template>

<style lang="scss" scoped>
.form-textarea {
  display: block;
  width: 100%;
  padding: 15px 0;
  height: 100px;
  border: 0;
  border-bottom: 1px solid $grey-100;
  background: transparent;
  outline: none;
  font-size: 14px;
  resize: none;
  font-family: "Swansea", sans-serif;
  &::placeholder {
    color: transparent;
    visibility: hidden;
  }
}
</style>
