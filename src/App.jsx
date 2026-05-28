import { useState, useEffect } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { fetchAnimeData } from './services/anilist'
import './styles/App.css'

export default function App() {
  const [carousels, setCarousels] = useState({
    popular: [],
    trending: [],
    topRated: [],
    mostWatched: []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadAnimeData = async () => {
      try {
        setLoading(true)
        const data = await fetchAnimeData()
        setCarousels(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching anime data:', err)
        setError('Failed to load anime data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadAnimeData()
  }, [])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {error && <div className="error-message">{error}</div>}
        
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading anime data...</p>
          </div>
        ) : (
          <>
            <section className="carousel-section">
              <h2 className="section-title">🔥 Trending Now</h2>
              <Carousel anime={carousels.trending} />
            </section>

            <section className="carousel-section">
              <h2 className="section-title">⭐ Popular Anime</h2>
              <Carousel anime={carousels.popular} />
            </section>

            <section className="carousel-section">
              <h2 className="section-title">👑 Top Rated</h2>
              <Carousel anime={carousels.topRated} />
            </section>

            <section className="carousel-section">
              <h2 className="section-title">📺 Most Watched</h2>
              <Carousel anime={carousels.mostWatched} />
            </section>
          </>
        )}
      </main>
    </div>
  )
}
