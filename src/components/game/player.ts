import { onMounted, onUnmounted } from "vue"
import { usePlayerStore } from "../../store/player"

export function useMove() {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  } = usePlayerStore()

  const actions: Record<string, Function> = {
    ArrowLeft: movePlayerToLeft,
    ArrowRight: movePlayerToRight,
    ArrowUp: movePlayerToUp,
    ArrowDown: movePlayerToDown,
    KeyK: movePlayerToUp,
    KeyJ: movePlayerToDown,
    KeyH: movePlayerToLeft,
    KeyL: movePlayerToRight,
  }

  function matchAction(actionName: string) {
    return actions[actionName] ?? (() => { })
  }

  function onKeyup(event: KeyboardEvent) {
    event.preventDefault()
    const action = matchAction(event.code)
    action()
  }

  onMounted(() => {
    window.addEventListener("keyup", onKeyup)
  })

  onUnmounted(() => {
    window.removeEventListener("keyup", onKeyup)
  })
}
