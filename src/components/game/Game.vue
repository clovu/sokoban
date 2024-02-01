<template>
  <div>
    <Map></Map>
    <Player></Player>
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y"></Cargo>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCargoStore } from "../../store/cargo"
import Cargo from "./Cargo.vue"
import Map from "./Map.vue"
import Player from "./Player.vue"

const { addCargo, createCargo, cargos } = useCargoStore()
addCargo(createCargo({ x: 2, y: 1 }))
addCargo(createCargo({ x: 3, y: 3 }))
addCargo(createCargo({ x: 3, y: 2 }))
</script>
