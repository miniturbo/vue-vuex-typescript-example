<template>
  <hr class="divider" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaseDivider extends Vue {}
</script>

<style lang="postcss" scoped>
.divider {
  @apply my-4 border-gray-400;
}
</style>
