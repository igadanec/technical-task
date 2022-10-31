<script setup>
import { required, email, max, numeric } from "@vee-validate/rules";
import { defineRule, configure } from "vee-validate";
import IconMail from "@/assets/icons/mail.svg";

defineRule("email", email);
defineRule("required", required);
defineRule("max", max);
defineRule("numeric", numeric);

configure({
  generateMessage: (context) => {
    let formattedField = context.field
      ?.split(/(?=[A-Z])/)
      ?.join(" ")
      ?.toLowerCase();
    return `The field ${formattedField} is invalid`;
  },
});

const isSubmitting = ref(false);
const formSumitted = ref(false);

const handleSubmit = (values) => {
  if (!values) return;
  isSubmitting.value = true;
  setTimeout(() => {
    formSumitted.value = true;
    isSubmitting.value = false;
    setTimeout(() => {
      formSumitted.value = false;
    }, 5000);
  }, 2000);
};
</script>

<template>
  <div class="contact-form">
    <Form v-if="!formSumitted" name="contactForm" @submit="handleSubmit">
      <div class="contact-form__grid">
        <FormItem
          name="name"
          label="Your name"
          v-slot="{ field, meta }"
          rules="required"
        >
          <Input v-bind="field" :valid="meta.valid" />
        </FormItem>
        <FormItem
          name="email"
          label="Email address"
          v-slot="{ field, meta }"
          rules="required|email"
        >
          <Input v-bind="field" :valid="meta.valid" />
        </FormItem>
        <FormItem
          name="phoneNumber"
          label="Phone number"
          v-slot="{ field, meta }"
          rules="numeric"
        >
          <Input v-bind="field" :valid="meta.valid" />
        </FormItem>
        <FormItem name="company" label="Company" v-slot="{ field, meta }">
          <Input v-bind="field" :valid="meta.valid" />
        </FormItem>
        <div class="full-width">
          <FormItem
            name="title"
            label="Title"
            v-slot="{ field, meta }"
            rules="required"
          >
            <Input v-bind="field" :valid="meta.valid" />
          </FormItem>
        </div>
        <div class="full-width">
          <FormItem
            name="message"
            label="Message"
            v-slot="{ field, meta }"
            rules="required|max:1000"
          >
            <Textarea v-bind="field" :valid="meta.valid" />
          </FormItem>
        </div>
      </div>
      <Button
        :label="isSubmitting ? 'Sending...' : 'Submit'"
        type="secondary"
      />
    </Form>
    <div v-else class="contact-form__success">
      <IconMail />
      <h4>The email was successfully sent</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-form {
  padding: 30px 20px;
  background-color: $grey-50;
  @media (min-width: $viewport-tablet) {
    padding: 50px;
  }
  @media (min-width: $viewport-desktop) {
    padding: 83px 98px;
  }
  &__grid {
    display: grid;
    grid-template-columns: 12fr;
    grid-gap: 2rem;
    @media (min-width: $viewport-tablet) {
      grid-template-columns: 6fr 6fr;
    }
    & .full-width {
      @media (min-width: $viewport-tablet) {
        grid-column: span 2;
      }
    }
  }
  .btn {
    margin: 3.75rem auto 0;
  }
  &__success {
    text-align: center;
    svg {
      margin: auto;
      display: block;
      width: 100%;
      max-width: 20rem;
      :deep() path {
        &:last-child {
          animation: up-down 2s infinite;
          @keyframes up-down {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(20px);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      }
    }
    h4 {
      margin-top: 1.875rem;
    }
  }
}
</style>
