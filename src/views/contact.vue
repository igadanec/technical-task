<script setup>
import TitleDescSection from "@/components/sections/TitleDescSection.vue";
import AddressesSection from "@/components/sections/AddressesSection.vue";
import ContactForm from "@/components/form/ContactForm.vue";
</script>

<template>
  <div class="container">
    <div class="container__inner">
      <TitleDescSection float-text="Contact">
        <template #title>
          <h1>Let's talk</h1>
        </template>
        <template #description>
          <p>
            Deep light land beginning form fish there brought fifth forth earth
            us make cattle seasons every spirit one can't behold, creepeth fish
            thing male his him.
          </p>
        </template>
      </TitleDescSection>
      <ContactForm />
      <AddressesSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 10.625rem;
  margin-bottom: 17.9375rem;
  &__inner {
  }
}
</style>
