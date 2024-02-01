import { computed } from "vue"

export interface Position {
  x: number
  y: number
}

const STEP = 32
export function usePosition(pos: Position) {
  return computed(() => ({
    left: pos.x * STEP + "px",
    top: pos.y * STEP + "px",
  }))
}