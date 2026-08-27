import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { stories } from './stories'
import { TileArt } from './TileArt'
import { useTap } from './useTap'
import './App.css'

const FLIP_MS = 520

type Box = { top: number; left: number; width: number; height: number }

export default function App() {
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([])
  const closeTimer = useRef<number | undefined>(undefined)

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [box, setBox] = useState<Box | null>(null)
  const [expanded, setExpanded] = useState(false)

  const measure = useCallback((index: number): Box => {
    const rect = tileRefs.current[index]?.getBoundingClientRect()
    if (!rect) return { top: 0, left: 0, width: 0, height: 0 }
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
  }, [])

  const openTile = useCallback(
    (index: number) => {
      if (openIndex !== null) return
      window.clearTimeout(closeTimer.current)
      setBox(measure(index))
      setExpanded(false)
      setOpenIndex(index)
    },
    [measure, openIndex],
  )

  const closeTile = useCallback(() => {
    if (openIndex === null || !expanded) return
    setBox(measure(openIndex))
    setExpanded(false)
    closeTimer.current = window.setTimeout(() => {
      setOpenIndex(null)
      setBox(null)
    }, FLIP_MS)
  }, [expanded, measure, openIndex])

  // Let the card mount over the tile for one frame, then run the flip.
  useLayoutEffect(() => {
    if (openIndex === null || expanded) return
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setExpanded(true))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
    // Only re-run when a card is first opened.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const scale = box && typeof window !== 'undefined' ? box.width / window.innerWidth : 1
  const cardStyle = expanded
    ? { top: 0, left: 0, width: '100vw', height: '100dvh', transform: 'rotateY(180deg)' }
    : {
        top: `${box?.top ?? 0}px`,
        left: `${box?.left ?? 0}px`,
        width: `${box?.width ?? 0}px`,
        height: `${box?.height ?? 0}px`,
        transform: 'rotateY(0deg)',
      }

  return (
    <div className="app">
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

      {story && (
        <div className={`stage${expanded ? ' stage--open' : ''}`}>
          <div className="stage__veil" />
          <div className="card" style={cardStyle}>
            <div className="card__face card__face--front">
              <TileArt story={story} eager />
              <span className="tile__word">{story.word}</span>
            </div>

            <div className="card__face card__face--back" {...backTap}>
              <div
                className="story"
                style={{ transform: expanded ? 'scale(1)' : `scale(${scale})` }}
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
