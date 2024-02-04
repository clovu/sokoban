import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTargetStore = defineStore('target', () => {
  const targets = reactive([
    {
      x: 1,
      y: 1
    }
  ])

  return { targets }
})