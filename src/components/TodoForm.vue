<template>
  <div class="form">
    <base-input class="input" :value.sync="content" />
    <base-button :primary="true" @click="submit">作成</base-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

@Component({ components: { BaseInput, BaseButton } })
export default class TodoForm extends Vue {
  private content = ''

  @Emit()
  private submit() {
    const content = this.content
    this.content = ''
    return { content }
  }
}
</script>

<style lang="postcss" scoped>
.form {
  @apply flex;
}

.input {
  @apply mr-2;
}
</style>
