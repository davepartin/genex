import { useState } from 'react'
import type { Story } from './stories'

const TILES_BASE = `${import.meta.env.BASE_URL}tiles/`

type Props = {
  story: Story
  /** Larger art is used for the flipping card so it stays crisp fullscreen. */
  eager?: boolean
}

/**
 * Charcoal tile art. If the illustration file has not been dropped into
 * public/tiles/ yet, a charcoal-and-cream lettered stand-in is drawn instead so
 * the alphabet stays playable.
 */
export function TileArt({ story, eager }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="tile-art tile-art--fallback" aria-hidden="true">
        <span className="tile-art__letter">{story.letter}</span>
      </div>
    )
  }

  return (
    <img
      className="tile-art"
      src={`${TILES_BASE}${story.image}`}
      alt=""
      draggable={false}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
