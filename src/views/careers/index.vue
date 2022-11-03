<script setup>
import TitleDescSection from "@/components/sections/TitleDescSection.vue";
import TwoColumnTextSection from "@/components/sections/TwoColumnTextSection.vue";
import PositionsSection from "@/components/sections/PositionsSection.vue";
</script>

<template>
  <div class="container">
    <div class="container__inner">
      <TitleDescSection float-text="Careers">
        <template #title>
          <h1>Creative talent wanted</h1>
        </template>
      </TitleDescSection>
      <img
        class="cover-image"
        src="@/assets/images/careers/career-cover.webp"
        alt="Career cover"
      />
      <div>
        <TwoColumnTextSection>
          <template #title>
            <h5>Careers</h5>
          </template>
          <template #content-left>
            <h2>The kind of people we look for</h2>
          </template>
        </TwoColumnTextSection>
        <TwoColumnTextSection>
          <template #content-left>
            <h3>Hungry for new knowledge</h3>
            <p>
              Itself sixth bearing beast was she'd image spirit tree male
              gathering and open gathered fourth itself can't seas. Dominion
              one, gathered bearing third.
            </p>
          </template>
          <template #content-right>
            <h3>Not afraid of the unknown</h3>
            <p>
              Don't signs creepeth creeping light spirit kind divide fowl,
              female saying, forth after bring created. Good that fish set don't
              void.
            </p>
          </template>
        </TwoColumnTextSection>
      </div>
      <PositionsSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 10.625rem;
  margin-bottom: 9.375rem;
  &__inner {
    .cover-image {
      display: block;
      width: 100%;
      max-height: 550px;
      min-height: 450px;
      object-fit: cover;
    }
    :deep() .two-col-text {
      margin-inline: 0;
      @media (min-width: $viewport-tablet) {
        margin-inlin: 3.75rem;
      }
      @media (min-width: $viewport-desktop) {
        margin-inline: 6.0625rem;
      }
      &:first-child {
        margin-bottom: 0;
      }
      &:last-child {
        margin-top: 1.875rem;
        @media (min-width: $viewport-laptop) {
          margin-top: 3.625rem;
        }
      }
      h3 {
        margin-bottom: 1.6875rem;
      }
    }
  }
}
</style>
