import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from "vitest"

import { usePlayerStore } from '../../../store/player'
import { useMove } from '../player'

describe.skip("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test("should move left when press ArrowLeft or KeyH", () => {
    useMove()
    const { player } = usePlayerStore()
    player.x = 1

    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }))
    expect(player.x).toBe(0)

    player.x = 1
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "KeyH" }))
    expect(player.x).toBe(0)
  })

  test("should move right when press ArrowRight or KeyL", () => {
    useMove()
    const { player } = usePlayerStore()
    player.x = 1

    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowRight" }))
    expect(player.x).toBe(2)

    player.x = 1
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "KeyL" }))
    expect(player.x).toBe(2)
  })

  test("should move right when press ArrowUp or KeyK", () => {
    useMove()
    const { player } = usePlayerStore()
    player.y = 1

    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowUp" }))
    expect(player.y).toBe(0)

    player.y = 1
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "KeyK" }))
    expect(player.y).toBe(0)
  })

  test("should move right when press ArrowDown or KeyJ", () => {
    useMove()
    const { player } = usePlayerStore()
    player.y = 1

    window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowDown" }))
    expect(player.y).toBe(2)

    player.y = 1
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "KeyJ" }))
    expect(player.y).toBe(2)
  })
})