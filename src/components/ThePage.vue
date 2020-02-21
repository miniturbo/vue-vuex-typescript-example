<template>
  <div class="page" v-if="loaded">
    <div class="content">
      <slot />
    </div>
  </div>
  <div class="page" v-else>
    <div class="loading">
      読み込み中...
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ThePage extends Vue {
  @Prop() loaded = false
}
</script>

<style lang="postcss" scoped>
.content {
  @apply p-8;
}

.loading {
  @apply flex items-center justify-center w-screen h-screen;
}
</style>
