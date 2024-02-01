<template>
  <div>
    <div v-for="row in map" class="flex">
      <div v-for="col in row">
        <template v-if="col === MapTilp.Wall">
          <img :src="WallImg" />
        </template>
        <template v-else-if="col === MapTilp.Floor">
          <img :src="FloorImg" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FloorImg from "../../assets/floor.png"
import WallImg from "../../assets/wall.png"

import { MapTilp, useMapStore } from "../../store/map"

const { map } = useMapStore()
</script>
