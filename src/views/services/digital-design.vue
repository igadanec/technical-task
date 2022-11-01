<script setup>
import CoverSection from "@/components/sections/CoverSection.vue";
import TwoColumnTextSection from "@/components/sections/TwoColumnTextSection.vue";
import WorkSection from "@/components/sections/WorkSection.vue";
import MoreWorkSection from "@/components/sections/MoreWorkSection.vue";
import IconArrowTopRight from "@/assets/icons/arrow-top-right.svg";
</script>

<template>
  <div class="container">
    <CoverSection>
      <template #image>
        <img
          src="@/assets/images/services/digital-design/hero.webp"
          alt="Hero image"
        />
      </template>
      <template #title>
        <h1>Digital design</h1>
      </template>
    </CoverSection>
    <div class="container__inner">
      <TwoColumnTextSection>
        <template #title>
          <h5>Description</h5>
        </template>
        <template #content-left>
          <h3>
            Behold you lesser our let seed there for and light great lights that
            seasons.
          </h3>
        </template>
        <template #content-right>
          <p>
            Gathered hath days beginning fowl divided image i can't given is
            life air. Created without stars life moved second two forth make.
          </p>
          <p>
            Creature also hath every fruitful them third own. She'd called he
            created two after created morning make also open stars upon, herb
            without fowl said itself good. Fruitful seed of, blessed be were.
          </p>
          <ul>
            <li>
              <h5>User interface design</h5>
            </li>
            <li>
              <h5>User experience design</h5>
            </li>
            <li>
              <h5>Graphic design</h5>
            </li>
          </ul>
        </template>
      </TwoColumnTextSection>
      <WorkSection />
    </div>
    <MoreWorkSection
      slug-left="/services/software-development"
      slug-right="/services/product-marketing"
    >
      <template #image-left>
        <img
          src="@/assets/images/services/digital-design/software.webp"
          alt="Software"
        />
      </template>
      <template #link-left>
        <p>Software & App Development <IconArrowTopRight /></p>
      </template>
      <template #image-right>
        <img
          src="@/assets/images/services/digital-design/marketing.webp"
          alt="Software"
        />
      </template>
      <template #link-right>
        <p>Product Marketing <IconArrowTopRight /></p>
      </template>
    </MoreWorkSection>
  </div>
</template>

<style lang="scss" scoped>
.container {
  &__inner {
    @media (min-width: $viewport-desktop) {
      padding: 0 13.125rem;
    }
  }
}
</style>
