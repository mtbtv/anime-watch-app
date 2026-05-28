import { useState } from 'react'
import '../styles/Header.css'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery)
      // TODO: Implement search functionality
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🎬 AnimeWatch</h1>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <div className={`search-input-wrapper ${isSearchActive ? 'active' : ''}`}>
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => setIsSearchActive(false)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </div>
        </form>

        <nav className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Categories</a>
          <a href="#" className="nav-link">Favorites</a>
        </nav>
      </div>
    </header>
  )
}
