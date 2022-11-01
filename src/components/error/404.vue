<script setup>
import IconNotFound from "@/assets/icons/not-found.svg";

const router = useRouter();
</script>

<template>
  <div class="not-found">
    <div class="not-found__inner">
      <IconNotFound />
      <h2>Page not found</h2>
      <Button @click="router.go(-1)" label="Go back" type="secondary" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  min-height: 37.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &__inner {
    width: 100%;
    padding: 3.75rem 1.25rem;
    svg {
      display: block;
      width: 100%;
      max-width: 37.5rem;
      margin: 0 auto 3.125rem;
    }
    h2 {
      margin-bottom: 1.875rem;
      text-align: center;
    }
    .btn {
      margin-inline: auto;
    }
  }
}
</style>
