import { useState, useEffect } from 'react'

export function useRemoteControl(onNavigate, maxCarousels = 4) {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const [activeCarousel, setActiveCarousel] = useState(0)
  const [selectedAnime, setSelectedAnime] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default scrolling behavior
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()
      }

      switch (e.key) {
        case 'ArrowUp':
          // Move to previous carousel section
          setActiveCarousel((prev) => {
            const newCarousel = Math.max(0, prev - 1)
            if (newCarousel !== prev) {
              setFocusedIndex(0) // Reset focus to first item in new carousel
            }
            return newCarousel
          })
          break

        case 'ArrowDown':
          // Move to next carousel section
          setActiveCarousel((prev) => {
            const newCarousel = Math.min(maxCarousels - 1, prev + 1)
            if (newCarousel !== prev) {
              setFocusedIndex(0) // Reset focus to first item in new carousel
            }
            return newCarousel
          })
          break

        case 'ArrowLeft':
          // Move left in carousel (previous card)
          e.preventDefault()
          setFocusedIndex((prev) => Math.max(0, prev - 1))
          break

        case 'ArrowRight':
          // Move right in carousel (next card)
          e.preventDefault()
          setFocusedIndex((prev) => prev + 1)
          break

        case 'Enter':
        case ' ':
          // Select current item
          e.preventDefault()
          if (onNavigate) {
            onNavigate(activeCarousel, focusedIndex)
          }
          break

        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeCarousel, focusedIndex, onNavigate, maxCarousels])

  return { 
    focusedIndex, 
    setFocusedIndex, 
    activeCarousel, 
    setActiveCarousel,
    selectedAnime,
    setSelectedAnime
  }
}
