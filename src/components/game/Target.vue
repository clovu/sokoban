<template>
  <div class="absolute" :style="position">
    <img :src="TargetImg" />
  </div>
</template>

<script setup lang="ts">
import TargetImg from "../../assets/target.png"
import { Position, usePosition } from "../../composables/position"

const props = defineProps<Position>()

const position = usePosition(props)
</script>
