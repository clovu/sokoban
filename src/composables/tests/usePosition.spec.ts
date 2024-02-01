import { describe, expect, test } from "vitest"
import { reactive } from "vue"
import { usePosition } from "../position"

describe('usePosition', () => {

  test('should return a position', () => {
    const position = usePosition({ x: 1, y: 2 })
    expect(position.value).toEqual({
      left: '32px',
      top: '64px'
    })
  })

  test('should update position when reactive data change', () => {
    const pos = reactive({ x: 1, y: 2 })
    const position = usePosition(pos)

    pos.x = 3

    expect(position.value).toEqual({
      left: '96px',
      top: '64px'
    })
  })

})