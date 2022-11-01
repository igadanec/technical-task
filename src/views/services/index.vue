<script setup>
import TitleDescSection from "@/components/sections/TitleDescSection.vue";
import ImageTextSection from "@/components/sections/ImageTextSection.vue";
import TextImageSection from "@/components/sections/TextImageSection.vue";
import ThreeColumnStepSection from "@/components/sections/ThreeColumnStepSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";

const steps = ref([
  {
    title: "Analysis & Idea",
    description:
      "Branding and digital are forte, given the state of the world, think.",
  },
  {
    title: "Design & Development",
    description:
      "Dominion it air bearing subdue seed very wherein, moving seas.",
  },
  {
    title: "Testing & Launch",
    description:
      "Land very had you and god make void forth said all and greater.",
  },
]);
</script>

<template>
  <div class="container">
    <div class="container__inner">
      <TitleDescSection float-text="Services">
        <template #title>
          <h1>Building from idea to implementation</h1>
        </template>
      </TitleDescSection>
      <ImageTextSection>
        <template #image-small>
          <img src="@/assets/images/services/software-small.webp" />
        </template>
        <template #image-large>
          <img src="@/assets/images/services/software-large.webp" />
        </template>
        <template #content>
          <h2>Sofrware & App Development</h2>
          <p>
            Delivering tailored engineering solutions to your business
            challenges, whether it is architectural design or web application
            development.
          </p>
          <ul>
            <li>
              <h5>Frontend development</h5>
            </li>
            <li>
              <h5>Backend development</h5>
            </li>
            <li>
              <h5>Mobile development</h5>
            </li>
            <li>
              <h5>Blockchain development</h5>
            </li>
          </ul>
          <Button
            to="/services/software-development"
            label="View service"
            type="secondary"
          />
        </template>
      </ImageTextSection>
      <TextImageSection>
        <template #image-small>
          <img src="@/assets/images/services/marketing-small.webp" />
        </template>
        <template #image-large>
          <img src="@/assets/images/services/marketing-large.webp" />
        </template>
        <template #content>
          <h2>Product Marketing</h2>
          <p>
            Your potential users are already here. We can help you reach them
            through different marketing channels and convert them to profitable
            customers.
          </p>
          <ul>
            <li>
              <h5>Seo & search marketing</h5>
            </li>
            <li>
              <h5>Social media marketing</h5>
            </li>
            <li>
              <h5>Content marketing</h5>
            </li>
            <li>
              <h5>Inbound marketing</h5>
            </li>
            <li>
              <h5>Paid marketing</h5>
            </li>
          </ul>
          <Button
            to="/services/product-marketing"
            label="View service"
            type="secondary"
          />
        </template>
      </TextImageSection>
      <ImageTextSection>
        <template #image-small>
          <img src="@/assets/images/services/design-small.webp" />
        </template>
        <template #image-large>
          <img src="@/assets/images/services/design-large.webp" />
        </template>
        <template #content>
          <h2>Digital Design</h2>
          <p>
            From UX to visual design, we create digital products people love to
            use.
          </p>
          <ul>
            <li>
              <h5>User interface design</h5>
            </li>
            <li>
              <h5>User experience design</h5>
            </li>
            <li>
              <h5>Graphics design</h5>
            </li>
          </ul>
          <Button
            to="/services/digital-design"
            label="View service"
            type="secondary"
          />
        </template>
      </ImageTextSection>
    </div>
    <ThreeColumnStepSection :steps="steps" />
    <ContactSection>
      <h2>Interested in discussing a project?</h2>
      <p>
        Do you have a creative challenge for us? Get in touch with a member of
        the team.
      </p>
      <Button to="/contact" label="Get in touch" />
    </ContactSection>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 10.625rem;
}
</style>
