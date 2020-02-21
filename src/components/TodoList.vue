<template>
  <div>
    <todo-list-item
      class="list-item"
      :key="todo.id"
      v-for="todo in todos"
      v-bind="todo"
      @update="update"
      @destroy="destroy"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import TodoListItem from '@/components/TodoListItem.vue'

@Component({ components: { TodoListItem } })
export default class TodoList extends Vue {
  @Prop({ default: [] }) todos!: { id: string; content: string }[]

  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update(params: any) {
    return params
  }

  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  destroy(params: any) {
    return params
  }
}
</script>

<style lang="postcss" scoped>
.list-item {
  &:not(:last-child) {
    @apply mb-4;
  }
}
</style>
