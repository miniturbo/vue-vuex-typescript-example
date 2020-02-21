import uuid from 'uuid/v4'

export default class Todo {
  id = uuid()
  content!: string
  createdAt = Date.now()

  // NOTE: ゲッターは反応しない
  // get content() { ... }

  constructor(params: Pick<Todo, 'content'>) {
    this.update(params)
  }

  update(params: Pick<Todo, 'content'>) {
    Object.assign(this, params)
  }
}
