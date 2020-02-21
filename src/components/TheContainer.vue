<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheContainer extends Vue {}
</script>

<style lang="postcss" scoped>
.container {
  @apply max-w-screen-md mx-auto;
}
</style>
