<script setup>
import { Field } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  rules: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const rules = toRef(props, "rules");
const name = toRef(props, "name");
const label = toRef(props, "label");
</script>

<template>
  <Field
    v-slot="{ value, field, errorMessage, meta }"
    :name="name"
    :rules="rules"
  >
    <div class="form-item" :class="{ 'form-item--error': errorMessage }">
      <slot v-bind="{ field, meta, value }" />
      <label class="form-label" v-if="label" :for="name"
        >{{ label
        }}<span v-if="rules?.split('|').includes('required')">*</span></label
      >
      <div class="form-error">
        <transition name="fade">
          <span v-if="errorMessage">{{ errorMessage }}</span>
        </transition>
      </div>
    </div>
  </Field>
</template>

<style lang="scss">
.fade-leave-active,
.fade-enter-active {
  transition: 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.form {
  &-item {
    position: relative;
    margin-top: 16px;
    &:focus-within {
      .form-label {
        top: -15px;
      }
    }
    &--error {
      .form-input,
      .form-textarea {
        border-color: red !important;
      }
    }
  }
  &-input,
  &-textarea {
    &:not(:placeholder-shown) {
      & + .form-label {
        top: -15px;
      }
    }
  }
  &-label {
    pointer-events: none;
    display: block;
    position: absolute;
    top: 16px;
    font-size: 16px;
    transition: 0.3s;
  }
  &-error {
    position: absolute;
    top: calc(100% + 5px);
    color: red;
    font-size: 14px;
  }
}
</style>
