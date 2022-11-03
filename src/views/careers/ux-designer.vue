<script setup>
import CoverSection from "@/components/sections/CoverSection.vue";
import TwoColumnTextSection from "@/components/sections/TwoColumnTextSection.vue";
import PositionApply from "@/components/form/PositionApply.vue";
</script>

<template>
  <div class="container">
    <CoverSection>
      <template #image>
        <img
          src="@/assets/images/careers/designer-cover.webp"
          alt="Designer cover"
        />
      </template>
      <template #title>
        <h1>UX Designer</h1>
      </template>
    </CoverSection>
    <div class="container__inner">
      <TwoColumnTextSection>
        <template #title>
          <h5>Description</h5>
        </template>
        <template #content-left>
          <h2>We're hiring a UX Designer</h2>
        </template>
        <template #content-right>
          <p>
            Deep light land beginning form fish there brought fifth forth earth
            us make cattle seasons every spirit one can't behold, creepeth fish
            thing male his him darkness darkness night us tree.
          </p>
          <p>
            Given give make creature won't, yielding said good Seed seed form
            replenish deep which doesn't light can't our fruit seasons let
            light.
          </p>
          <h5>ZAGREB, CROATIA</h5>
        </template>
      </TwoColumnTextSection>
    </div>
    <div class="info">
      <div class="info-image">
        <img
          src="@/assets/images/careers/designer-info.webp"
          alt="Designer cover"
        />
      </div>
      <div class="container__inner">
        <TwoColumnTextSection>
          <template #content-left>
            <h3>Qualifications</h3>
            <ul>
              <li>
                <p>
                  A minimum of 5 years designing experiences and products in a
                  professional setting.
                </p>
              </li>
              <li>
                <p>Excellent knowledge of modern HTML, CSS</p>
              </li>
              <li>
                <p>
                  Fruit their days replenish first forth man after morning
                  heaven place.
                </p>
              </li>
              <li>
                <p>
                  Creeping creepeth open firmament seed lesser. Saw all gathered
                  without. Deep thing gathering, midst.
                </p>
              </li>
            </ul>
          </template>
          <template #content-right>
            <h3>Responsibilities</h3>
            <ul>
              <li>
                <p>Build prototypes to illustrate ideas.</p>
              </li>
              <li>
                <p>
                  Rule made fruit without deep. Night there a place herb our was
                  greater fish cattle which gathering fill moving days.
                </p>
              </li>
              <li>
                <p>
                  Fruit their days replenish first forth man after morning
                  heaven place.
                </p>
              </li>
              <li>
                <p>
                  Creeping creepeth open firmament seed lesser. Saw all gathered
                  without. Deep thing gathering, midst.
                </p>
              </li>
            </ul>
          </template>
        </TwoColumnTextSection>
      </div>
    </div>
    <div class="container__inner">
      <PositionApply />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  &__inner {
    :deep() .two-col-text {
      margin-inline: 0;
      @media (min-width: $viewport-tablet) {
        margin-inlin: 3.75rem;
      }
      @media (min-width: $viewport-desktop) {
        margin-inline: 6.0625rem;
      }
    }
  }
  .info {
    padding-block: 0 3.75rem;
    background-color: $dark_green-200;
    @media (min-width: $viewport-tablet) {
      padding-block: 7rem;
      margin-top: 30.3125rem;
    }
    &-image {
      @media (min-width: $viewport-tablet) {
        margin-right: 13.125rem;
        margin-top: -30.375rem;
      }
      img {
        display: block;
        width: 100%;
        min-height: 21.875rem;
        height: 100%;
        object-fit: cover;
        @media (min-width: $viewport-tablet) {
          min-height: 34.375rem;
        }
      }
    }
    :deep() .two-col-text {
      color: $white;
      margin-bottom: 0;
      p {
        color: $grey-600;
      }
    }
  }
}
</style>
