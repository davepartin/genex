import { useCallback, useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'

const MOVE_TOLERANCE = 12
const MAX_DURATION = 800

/**
 * Fires only on a genuine tap, so scrolling a long story never closes the card.
 */
export function useTap(onTap: () => void) {
  const start = useRef({ x: 0, y: 0, at: 0, moved: false })

  const onPointerDown = useCallback((event: ReactPointerEvent) => {
    start.current = { x: event.clientX, y: event.clientY, at: Date.now(), moved: false }
  }, [])

  const onPointerMove = useCallback((event: ReactPointerEvent) => {
    const { x, y } = start.current
    if (Math.hypot(event.clientX - x, event.clientY - y) > MOVE_TOLERANCE) {
      start.current.moved = true
    }
  }, [])

  const onPointerUp = useCallback(() => {
    const { at, moved } = start.current
    if (!moved && at > 0 && Date.now() - at < MAX_DURATION) onTap()
    start.current.at = 0
  }, [onTap])

  const onPointerCancel = useCallback(() => {
    start.current.moved = true
  }, [])

  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel }
}
