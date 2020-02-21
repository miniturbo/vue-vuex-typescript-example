import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from '@/store/modules'
import { getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

export const store = new Vuex.Store({ modules })

export const vxm = {
  app: getModule(modules.app, store),
  todoManager: getModule(modules.todoManager, store)
}
