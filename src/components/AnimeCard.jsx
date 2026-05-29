import { useState } from 'react'
import '../styles/AnimeCard.css'

export default function AnimeCard({ anime, isFocused = false, index = 0 }) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const {
    title,
    coverImage,
    averageScore,
    episodes,
    status,
    description
  } = anime

  const displayTitle = title?.english || title?.romaji || 'Unknown Title'
  const score = averageScore ? (averageScore / 10).toFixed(1) : 'N/A'

  const handleCardClick = () => {
    setIsPlaying(true)
    console.log('Playing:', displayTitle)
    // TODO: Add watch functionality
  }

  return (
    <div 
      className={`anime-card ${isFocused ? 'focused' : ''} ${isPlaying ? 'playing' : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={isFocused ? 0 : -1}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick()
        }
      }}
    >
      <div className="anime-card-image-wrapper">
        <img
          src={coverImage?.large || coverImage?.medium}
          alt={displayTitle}
          className="anime-card-image"
          loading="lazy"
        />
        
        {isFocused && <div className="focus-indicator"></div>}
        
        {isPlaying && (
          <div className="play-overlay">
            <div className="play-button">▶</div>
          </div>
        )}

        <div className="anime-card-overlay">
          <div className="anime-card-info">
            <div className="rating-badge">⭐ {score}</div>
            {episodes && (
              <div className="episodes-badge">📺 {episodes} eps</div>
            )}
            {status && (
              <div className="status-badge">{status}</div>
            )}
          </div>
        </div>
      </div>

      <div className="anime-card-content">
        <h3 className="anime-card-title">{displayTitle}</h3>
        
        {description && (
          <p className="anime-card-description">
            {description.replace(/<[^>]*>/g, '').substring(0, 100)}...
          </p>
        )}

        <button 
          className={`anime-card-btn ${isFocused ? 'focused' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            handleCardClick()
          }}
        >
          {isFocused ? '▶ PLAY' : 'Watch →'}
        </button>
      </div>

      {isFocused && (
        <div className="focus-border-indicator">
          <div className="focus-corner top-left"></div>
          <div className="focus-corner top-right"></div>
          <div className="focus-corner bottom-left"></div>
          <div className="focus-corner bottom-right"></div>
        </div>
      )}
    </div>
  )
}
