<template>
  <div class="absolute" :style="position">
    <img :src="CargoImg" />
  </div>
</template>

<script setup lang="ts">
import CargoImg from "../../assets/cargo.png"
import { Position, usePosition } from "../../composables/position"

const props = defineProps<Position>()
const position = usePosition(props)
</script>
