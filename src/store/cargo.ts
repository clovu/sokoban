import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/position";

interface Cargo {
  x: number
  y: number
}

export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo[] = reactive([])

  function createCargo({ x, y }: { x: number, y: number }): Cargo {
    return { x, y }
  }

  function addCargo(cargo: Cargo) {
    cargos.push(cargo)
  }

  function findCargo({ x, y }: Position) {
    return cargos.find(cargo => cargo.x === x && cargo.y === y)
  }

  return { cargos, createCargo, addCargo, findCargo }
})