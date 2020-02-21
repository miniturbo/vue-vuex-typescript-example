import Vue from 'vue'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import uuid from 'uuid/v4'

export interface Todo {
  id: string
  content: string
  createdAt: number
}

@Module({ name: 'todoManager', namespaced: true })
export default class TodoManagerModule extends VuexModule {
  _todos: { [key: string]: Todo } = {}

  get todos() {
    return Object.values(this._todos)
      .sort(todo => todo.createdAt)
      .reverse()
  }

  @Mutation
  addTodo(todo: Todo) {
    // NOTE: this._todos[todo.id] = todo だと反応しない
    Vue.set(this._todos, todo.id, todo)
  }

  @Mutation
  mergeTodo(todo: Pick<Todo, 'id' | 'content'>) {
    this._todos[todo.id].content = todo.content
  }

  @Mutation
  removeTodo(todo: Pick<Todo, 'id'>) {
    // NOTE: delete this._todos[todo.id] だと反応しない
    Vue.delete(this._todos, todo.id)
  }

  @Action
  createTodo(params: Pick<Todo, 'content'>) {
    if (!params.content) return

    this.context.commit('addTodo', {
      ...params,
      id: uuid(),
      createdAt: Date.now()
    })
  }

  @Action
  updateTodo(params: Pick<Todo, 'id' | 'content'>) {
    if (!params.content) return

    this.context.commit('mergeTodo', params)
  }

  @Action
  destroyTodo(params: Pick<Todo, 'id'>) {
    this.context.commit('removeTodo', params)
  }
}
