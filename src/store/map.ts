import { defineStore } from 'pinia'
import { ref } from 'vue'

import { Position } from '../composables/position'

export enum MapTilp {
  Wall = 1,
  Floor = 2,
}

type Map = MapTilp[][]

export const useMapStore = defineStore('map', () => {
  const title = ref('sokoban')
  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ]

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTilp.Wall
  }

  return { title, map, setupMap, isWall }
})