<template>
  <div class="absolute" :style="position">
    <img :src="KeeperImg" />
  </div>
</template>

<script setup lang="ts">
import KeeperImg from "../../assets/keeper.png"

import { usePlayerStore } from "../../store/player"
import { useMove } from "./player"
import { usePosition } from "../../composables/position"

const { player } = usePlayerStore()
const position = usePosition(player)

useMove()
</script>
