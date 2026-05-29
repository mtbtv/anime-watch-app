import { useRef, useState, useEffect } from 'react'
import AnimeCard from './AnimeCard'
import '../styles/Carousel.css'

export default function Carousel({ anime, isActive, focusedIndex, onFocusChange }) {
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

  // Auto-scroll focused item into center view when navigating
  useEffect(() => {
    if (!isActive || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const focusedElement = container.children[focusedIndex]

    if (focusedElement) {
      const elementLeft = focusedElement.offsetLeft
      const elementWidth = focusedElement.offsetWidth
      const containerWidth = container.clientWidth
      const containerScroll = container.scrollLeft

      // Calculate position to center the focused element
      const targetScroll = elementLeft + elementWidth / 2 - containerWidth / 2

      // Smooth scroll to focused element
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })

      // Update scroll button visibility
      setTimeout(checkScroll, 300)
    }
  }, [focusedIndex, isActive])

  // Initial scroll check
  useEffect(() => {
    setTimeout(checkScroll, 100)
  }, [anime])

  return (
    <div className={`carousel-wrapper ${isActive ? 'active' : ''}`}>
      {canScrollLeft && (
        <button
          className="carousel-btn carousel-btn-left"
          onClick={() => {
            if (focusedIndex > 0) {
              onFocusChange(focusedIndex - 1)
            }
          }}
          disabled={focusedIndex === 0}
          aria-label="Previous item"
          tabIndex={isActive ? 0 : -1}
        >
          ‹
        </button>
      )}

      <div
        className="carousel-container"
        ref={scrollContainerRef}
        onScroll={checkScroll}
        role="listbox"
      >
        {anime.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${isActive && focusedIndex === index ? 'focused' : ''}`}
            role="option"
            aria-selected={isActive && focusedIndex === index}
            tabIndex={isActive && focusedIndex === index ? 0 : -1}
          >
            <AnimeCard 
              anime={item} 
              isFocused={isActive && focusedIndex === index}
              index={index}
            />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          className="carousel-btn carousel-btn-right"
          onClick={() => {
            onFocusChange(focusedIndex + 1)
          }}
          disabled={focusedIndex >= anime.length - 1}
          aria-label="Next item"
          tabIndex={isActive ? 0 : -1}
        >
          ›
        </button>
      )}

      <div className="carousel-position-indicator">
        {focusedIndex + 1} / {anime.length}
      </div>
    </div>
  )
}
