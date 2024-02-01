import { createPinia } from 'pinia';
import { App } from 'vue';

const pinia = createPinia()

export function usePinia(app: App) {
  app.use(pinia)
}