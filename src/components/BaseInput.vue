<template>
  <input class="input" type="text" v-model="syncedValue" />
</template>

<script lang="ts">
import { Component, Vue, PropSync } from 'vue-property-decorator'

@Component
export default class BaseInput extends Vue {
  @PropSync('value', { type: String, default: '' }) syncedValue!: string
}
</script>

<style lang="postcss" scoped>
.input {
  @apply flex-1 px-2 py-2 text-base border rounded;
  @apply text-gray-700 bg-white border-gray-400;
}
</style>
