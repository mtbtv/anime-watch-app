import '../styles/AnimeCard.css'

export default function AnimeCard({ anime }) {
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

  return (
    <div className="anime-card">
      <div className="anime-card-image-wrapper">
        <img
          src={coverImage?.large || coverImage?.medium}
          alt={displayTitle}
          className="anime-card-image"
          loading="lazy"
        />
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

        <button className="anime-card-btn">
          Watch Now →
        </button>
      </div>
    </div>
  )
}
