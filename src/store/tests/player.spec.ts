import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from "vitest"
import { useMapStore } from '../map'
import { usePlayerStore } from "../player"
import { useCargoStore } from '../cargo'

describe("player", () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
      ])
    })
    test("should move to left", () => {
      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(0)
    })

    test("should move to right", () => {
      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(2)
    })

    test("should move to up", () => {
      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToUp()

      expect(player.y).toBe(0)
    })

    test("should move to down", () => {
      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(player.y).toBe(2)
    })

  })

  describe('collision wall detection', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ])
    })

    test('should not move to left when collision wall', () => {
      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(1)
    })

    test('should not move to right when collision wall', () => {
      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 3
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(3)
    })

    test('should not move to up when collision wall', () => {
      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToUp()

      expect(player.y).toBe(1)
    })

    test('should not move to down when collision wall', () => {
      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 2

      movePlayerToDown()

      expect(player.y).toBe(2)
    })

    test('the cargo should not move to the left when it collision with the wall', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCargo(cargo)

      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 2
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })

    test('the cargo should not move to the right when it collision with the wall', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 3, y: 1 })
      addCargo(cargo)

      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 2
      player.y = 1

      movePlayerToRight()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(3)
    })

    test('the cargo should not move to the up when it collision with the wall', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 1 })
      addCargo(cargo)

      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 2

      movePlayerToUp()

      expect(player.y).toBe(2)
      expect(cargo.y).toBe(1)
    })

    test('the cargo should not move to the down when it collision with the wall', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)

      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToDown()

      expect(player.y).toBe(1)
      expect(cargo.y).toBe(2)
    })
  })

  describe('push a cargo', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ])
    })

    test('push a cargo to left', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 4 })
      addCargo(cargo)

      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 3
      player.y = 4

      movePlayerToLeft()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(1)
    })

    test('push a cargo to right', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 4 })
      addCargo(cargo)

      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 1
      player.y = 4

      movePlayerToRight()

      expect(player.x).toBe(2)
      expect(cargo.x).toBe(3)
    })

    test('push a cargo to up', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 3 })
      addCargo(cargo)

      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 2
      player.y = 4

      movePlayerToUp()

      expect(player.y).toBe(3)
      expect(cargo.y).toBe(2)
    })

    test('push a cargo to down', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 3 })
      addCargo(cargo)

      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 2
      player.y = 3

      movePlayerToDown()

      expect(player.y).toBe(4)
      expect(cargo.y).toBe(3)
    })

    test('sould not move left when exists adjoin cargo', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)
      addCargo(createCargo({ x: 1, y: 1 }))

      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 3
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(3)
      expect(cargo.x).toBe(2)
    })

    test('sould not move right when exists adjoin cargo', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)
      addCargo(createCargo({ x: 3, y: 1 }))

      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.x).toBe(1)
      expect(cargo.x).toBe(2)
    })

    test('sould not move up when exists adjoin cargo', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)
      addCargo(createCargo({ x: 1, y: 1 }))

      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 3

      movePlayerToLeft()

      expect(player.y).toBe(3)
      expect(cargo.y).toBe(2)
    })

    test('sould not move up when exists adjoin cargo', () => {
      const { addCargo, createCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)
      addCargo(createCargo({ x: 1, y: 3 }))

      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1

      movePlayerToLeft()

      expect(player.y).toBe(1)
      expect(cargo.y).toBe(2)
    })
  })
})