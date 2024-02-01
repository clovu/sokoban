import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from "vitest"

import { useMapStore } from "../map"

describe('map', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('should', () => {
    expect(1 + 1).toBe(2)
  })

  test('should setup map', () => {
    const { setupMap, map } = useMapStore()
    const newMap = [
      [1, 1, 1, 1],
      [2, 2, 2, 2]
    ]
    setupMap(newMap)
    expect(map).toEqual(newMap)
  })
})