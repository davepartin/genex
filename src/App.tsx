import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { stories } from './stories'
import { TileArt } from './TileArt'
import { useTap } from './useTap'
import './App.css'

const FLIP_MS = 520

type Box = { top: number; left: number; width: number; height: number }

const EMPTY: Box = { top: 0, left: 0, width: 0, height: 0 }

function boxOf(element: Element | null | undefined): Box {
  const rect = element?.getBoundingClientRect()
  if (!rect) return EMPTY
  return { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
}

function px(box: Box) {
  return {
    top: `${box.top}px`,
    left: `${box.left}px`,
    width: `${box.width}px`,
    height: `${box.height}px`,
  }
}

export default function App() {
  const frameRef = useRef<HTMLDivElement>(null)
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([])
  const closeTimer = useRef<number | undefined>(undefined)

  // The grid is capped to a portrait frame so the alphabet keeps its phone shape
  // on a tablet or laptop. The flipped card fills that same frame.
  const [frame, setFrame] = useState<Box>(EMPTY)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [tile, setTile] = useState<Box>(EMPTY)
  const [expanded, setExpanded] = useState(false)

  useLayoutEffect(() => {
    const measureFrame = () => setFrame(boxOf(frameRef.current))
    measureFrame()
    window.addEventListener('resize', measureFrame)
    window.addEventListener('orientationchange', measureFrame)
    return () => {
      window.removeEventListener('resize', measureFrame)
      window.removeEventListener('orientationchange', measureFrame)
    }
  }, [])

  const openTile = useCallback(
    (index: number) => {
      if (openIndex !== null) return
      window.clearTimeout(closeTimer.current)
      setTile(boxOf(tileRefs.current[index]))
      setExpanded(false)
      setOpenIndex(index)
    },
    [openIndex],
  )

  const closeTile = useCallback(() => {
    if (openIndex === null || !expanded) return
    setTile(boxOf(tileRefs.current[openIndex]))
    setExpanded(false)
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), FLIP_MS)
  }, [expanded, openIndex])

  // Let the card mount over the tile for one frame, then run the flip.
  useLayoutEffect(() => {
    if (openIndex === null) return
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setExpanded(true))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [openIndex])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeTile()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeTile, openIndex])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const backTap = useTap(closeTile)
  const story = openIndex === null ? null : stories[openIndex]
  const scale = frame.width > 0 ? tile.width / frame.width : 1

  return (
    <div className="app">
      <div className="frame" ref={frameRef}>
        <main className="grid" aria-label="GENEX alphabet">
          {stories.map((item, index) => (
            <button
              key={item.letter}
              type="button"
              ref={(node) => {
                tileRefs.current[index] = node
              }}
              className="tile"
              style={{ visibility: openIndex === index ? 'hidden' : 'visible' }}
              aria-label={`${item.letter} — ${item.title}`}
              onClick={() => openTile(index)}
            >
              <TileArt story={item} />
              <span className="tile__word">{item.word}</span>
            </button>
          ))}
        </main>
      </div>

      {story && (
        <div className={`stage${expanded ? ' stage--open' : ''}`}>
          <div className="stage__veil" style={px(frame)} />

          <div
            className="card"
            style={{
              ...px(expanded ? frame : tile),
              transform: expanded ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            <div className="card__face card__face--front">
              <TileArt story={story} eager />
              <span className="tile__word">{story.word}</span>
            </div>

            <div className="card__face card__face--back" {...backTap}>
              <div
                className="story"
                style={{
                  width: `${frame.width}px`,
                  height: `${frame.height}px`,
                  transform: expanded ? 'scale(1)' : `scale(${scale})`,
                }}
              >
                <div className="story__scroll">
                  <div className="story__inner">
                    <p className="story__letter">{story.letter}</p>
                    <h1 className="story__title">{story.title}</h1>
                    <p className="story__summary">{story.summary}</p>

                    <ul className="story__keywords">
                      {story.keywords.map((word) => (
                        <li key={word}>{word}</li>
                      ))}
                    </ul>

                    <blockquote className="story__verse">
                      <p className="story__verse-text">{story.verseText}</p>
                      <cite className="story__verse-ref">{story.verseRef}</cite>
                    </blockquote>

                    <p className="story__christ">{story.christ}</p>
                    <p className="story__hint">tap to go back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
