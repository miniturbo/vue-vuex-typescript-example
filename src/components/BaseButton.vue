<template>
  <button
    :class="[
      'button',
      { 'is-primary': primary, 'is-danger': danger, 'is-small': small }
    ]"
    @click="click"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class BaseButton extends Vue {
  @Prop({ default: false }) primary!: boolean
  @Prop({ default: false }) danger!: boolean
  @Prop({ default: false }) small!: boolean

  @Emit()
  click() {
    // noop
  }
}
</script>

<style lang="postcss" scoped>
.button {
  @apply px-4 py-2 text-base border rounded cursor-pointer select-none;
  @apply text-gray-700 bg-white border-gray-400;
  padding: 0.5em 1em;

  &:hover {
    @apply border-gray-500;
  }

  &.is-primary {
    @apply text-white bg-green-500 border-transparent;

    &:hover {
      @apply text-white bg-green-600;
    }
  }

  &.is-danger {
    @apply text-white bg-red-500 border-transparent;

    &:hover {
      @apply text-white bg-red-600;
    }
  }

  &.is-small {
    @apply text-xs rounded-sm;
  }
}
</style>
