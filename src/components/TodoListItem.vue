<template>
  <div class="list-item" v-if="editable">
    <base-input :value.sync="newContent" />
    <base-button class="button" :primary="true" :small="true" @click="update"
      >更新</base-button
    >
    <base-button class="button" :small="true" @click="cancel"
      >キャンセル</base-button
    >
  </div>
  <div class="list-item" v-else>
    <div class="content">
      {{ content }}
    </div>
    <base-button class="button" :small="true" @click="edit">編集</base-button>
    <base-button class="button" :danger="true" :small="true" @click="destroy"
      >削除</base-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

@Component({ components: { BaseInput, BaseButton } })
export default class TodoListItem extends Vue {
  private newContent = ''
  private editable = false

  @Prop() id!: string
  @Prop() content!: string

  private edit() {
    this.newContent = this.content
    this.editable = true
  }

  @Emit()
  private update() {
    this.editable = false
    return {
      id: this.id,
      content: this.newContent
    }
  }

  @Emit()
  private destroy() {
    return {
      id: this.id
    }
  }

  private cancel() {
    this.editable = false
  }
}
</script>

<style lang="postcss" scoped>
.list-item {
  @apply flex items-center p-2 border border-gray-400 rounded;
}

.content {
  @apply flex-1 break-all;
}

.button {
  @apply ml-2;
}
</style>
