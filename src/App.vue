<template>
  <the-page :loaded="initialized">
    <the-container>
      <todo-form @submit="create" />
      <base-divider v-if="todos.length > 0" />
      <todo-list :todos="todos" @update="update" @destroy="destroy" />
    </the-container>
  </the-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ThePage from '@/components/ThePage.vue'
import TheContainer from '@/components/TheContainer.vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import { vxm } from '@/store'
import { Todo } from '@/store/modules/todoManager'

@Component({
  components: { ThePage, TheContainer, TodoForm, TodoList, BaseDivider }
})
export default class App extends Vue {
  get initialized() {
    return vxm.app.initialized
  }

  get todos() {
    return vxm.todoManager.todos
  }

  mounted() {
    vxm.app.initialize()
  }

  create(params: Pick<Todo, 'content'>) {
    vxm.todoManager.createTodo(params)
  }

  update(params: Pick<Todo, 'id' | 'content'>) {
    vxm.todoManager.updateTodo(params)
  }

  destroy(params: Pick<Todo, 'id'>) {
    vxm.todoManager.destroyTodo(params)
  }
}
</script>

<style src="@/assets/stylesheets/tailwind.css"></style>
<style lang="postcss">
body {
  @apply text-gray-700;
}
</style>
