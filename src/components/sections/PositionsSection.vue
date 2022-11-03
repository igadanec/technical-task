<script setup>
import IconArrowTopRight from "@/assets/icons/arrow-top-right.svg";

const positions = ref([
  {
    type: "Technology",
    title: "Back-End Developer",
    period: "Full-time",
    slug: "/careers/backend-developer",
  },
  {
    type: "Creative",
    title: "UX Designer",
    period: "Full-time",
    slug: "/careers/ux-designer",
  },
  {
    type: "Technology",
    title: "Software Developer",
    period: "Full-time",
    slug: "/careers/software-developer",
  },
  {
    type: "Strategy",
    title: "Senior Manager",
    period: "Full-time",
    slug: "/careers/senior-manager",
  },
]);
</script>

<template>
  <section class="position">
    <h1 class="large">Positions</h1>
    <div class="position__inner">
      <router-link
        :to="position.slug"
        class="option"
        v-for="(position, index) in positions"
        :key="`position-${index}`"
        v-thover="{ scale: 1.3 }"
      >
        <p class="type">{{ position.type }}</p>
        <h3>{{ position.title }}</h3>
        <div class="text-icon">
          <p>{{ position.period }}</p>
          <IconArrowTopRight />
        </div>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.position {
  .large {
    margin-bottom: 7.625rem;
    text-align: center;
  }
  &__inner {
    border-top: 1px solid $grey-100;
    .option {
      cursor: default;
      text-decoration: none;
      color: $dark_green-200;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.625rem;
      padding: 1.5rem 1.25rem;
      border-bottom: 1px solid $grey-100;
      transition: 0.3s;
      @media (min-width: $viewport-tablet) {
        flex-direction: row;
        gap: 1.5rem;
        padding: 2.5rem 3.1875rem;
      }
      &:hover {
        background-color: $dark_green-200;
        .type {
          color: $grey-600;
        }
        h3,
        .text-icon p {
          color: $white;
        }
      }
      .type {
        color: $grey-800;
        transition: 0.3s;
      }
      h3 {
        transition: 0.3s;
      }
      .text-icon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;
        @media (min-width: $viewport-tablet) {
          justify-content: initial;
        }
        p {
          margin-right: 3.3125rem;
          font-weight: bold;
          color: #121212;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
