import { useRef, useState } from 'react'
import AnimeCard from './AnimeCard'
import '../styles/Carousel.css'

export default function Carousel({ anime }) {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
    }
  }

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 300
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="carousel-wrapper">
      {canScrollLeft && (
        <button
          className="carousel-btn carousel-btn-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>
      )}

      <div
        className="carousel-container"
        ref={scrollContainerRef}
        onScroll={checkScroll}
      >
        {anime.map((item) => (
          <div key={item.id} className="carousel-item">
            <AnimeCard anime={item} />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          className="carousel-btn carousel-btn-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  )
}
