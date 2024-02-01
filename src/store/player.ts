import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useCargoStore } from "./cargo";

export const usePlayerStore = defineStore('player', () => {
  const player = reactive({
    x: 3,
    y: 1,
  })

  const { isWall } = useMapStore()
  const { findCargo } = useCargoStore()

  function _move(dx: number, dy: number) {
    const next = { x: player.x + dx, y: player.y + dy }
    if (isWall(next)) return

    const cargo = findCargo(next)

    if (cargo != void 0) {
      const adjoinPosition = { x: next.x + dx, y: next.y + dy }
      const adjoin = findCargo(adjoinPosition)
      if (adjoin != void 0) return
      if (isWall(adjoinPosition)) return

      cargo.x += dx;
      cargo.y += dy;
    }

    player.x += dx;
    player.y += dy;
  }

  function movePlayerToLeft() {
    _move(-1, 0)
  }

  function movePlayerToRight() {
    _move(1, 0)
  }

  function movePlayerToUp() {
    _move(0, -1)
  }

  function movePlayerToDown() {
    _move(0, 1)
  }

  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown }
})