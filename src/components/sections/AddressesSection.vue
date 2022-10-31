<script setup>
import Card from "@/components/Card.vue";

const addresses = ref([
  {
    capital: "London",
    country: "UK",
    street: "Vlaška ulica",
    houseNumber: "70 E",
    email: "hello@asynclabs.co",
    phone: "+385 99 4936 071",
  },
  {
    capital: "Zagreb",
    country: "Croatia",
    street: "Vlaška ulica",
    houseNumber: "70 E",
    email: "hello@asynclabs.co",
    phone: "+385 99 4936 071",
  },
  {
    capital: "Zagreb",
    country: "Croatia",
    street: "Lipovečka",
    houseNumber: "1",
    email: "hello@asynclabs.co",
    phone: "+385 99 4936 071",
  },
]);
</script>

<template>
  <section class="addresses">
    <Card v-for="(address, index) in addresses" :key="`address-${index}`">
      <template #title>
        <h3>{{ `${address.capital}, ${address.country}` }}</h3>
      </template>
      <template #content>
        <p>{{ `${address.street} ${address.houseNumber}` }}</p>
        <p>{{ address.email }}</p>
        <p>{{ address.phone }}</p>
      </template>
    </Card>
  </section>
</template>

<style lang="scss" scoped>
.addresses {
  margin-top: 3.75rem;
  display: grid;
  grid-template-columns: 12fr;
  grid-gap: 1.875rem;
  @media (min-width: $viewport-desktop) {
    margin-top: 7.5rem;
    grid-template-columns: repeat(3, 4fr);
  }
}
</style>
