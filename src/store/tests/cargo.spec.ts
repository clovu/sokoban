import { describe, test, expect, beforeEach } from "vitest"
import { useCargoStore } from "../cargo"
import { createPinia, setActivePinia } from "pinia"

describe('cargo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('should add a cargo', () => {
    const { createCargo, addCargo, cargos } = useCargoStore()
    const cargo = createCargo({ x: 1, y: 1 })
    addCargo(cargo)
    expect(cargos.length).toBe(1)
  })

  test('should find a cargo', () => {
    const { createCargo, addCargo, findCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 3 })
    addCargo(cargo)
    const foundCargo = findCargo(cargo)
    expect(foundCargo).toEqual(cargo)
  })
})