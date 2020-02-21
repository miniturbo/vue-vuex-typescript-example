import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { sleep } from '@/utils'

@Module({ name: 'app', namespaced: true })
export default class AppModule extends VuexModule {
  initialized = false

  @Mutation
  completeInitialization() {
    this.initialized = true
  }

  @Action({ commit: 'completeInitialization' })
  async initialize() {
    await sleep(1000 * 1)
  }
}
