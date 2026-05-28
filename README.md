# Anime Watch App

A modern anime watching website built with React and AniList API. Features multiple carousels for popular, trending, and most-watched anime.

## Features

- 🎬 **Popular Anime Carousel** - Display trending popular anime
- 📺 **Most Watched Anime Carousel** - Show most-watched anime series
- ⭐ **Top Rated Anime Carousel** - Featured top-rated anime
- 🔍 **Search Functionality** - Search for your favorite anime
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful and intuitive interface with smooth animations
- 🔥 **Trending Carousel** - Display currently trending anime

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **API**: AniList GraphQL API
- **HTTP Client**: Axios
- **Styling**: CSS3 with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/mtbtv/anime-watch-app.git
cd anime-watch-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
anime-watch-app/
├── src/
│   ├── components/
│   │   ├── Carousel.jsx       # Carousel component
│   │   ├── AnimeCard.jsx      # Anime card component
│   │   └── Header.jsx         # Header with search
│   ├── services/
│   │   └── anilist.js         # AniList API service
│   ├── styles/
│   │   ├── App.css            # Main app styles
│   │   ├── Carousel.css       # Carousel styles
│   │   ├── AnimeCard.css      # Card styles
│   │   └── Header.css         # Header styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## API Documentation

This project uses the [AniList API](https://anilist.co/graphiql) for fetching anime data.

### Available Carousels

1. **Trending Anime** - Currently trending anime sorted by trending score
2. **Popular Anime** - Most popular anime sorted by popularity
3. **Top Rated** - Highest rated anime sorted by score
4. **Most Watched** - Most watched anime on AniList

## Features

### Carousel Navigation
- Smooth horizontal scrolling
- Left/Right navigation buttons
- Responsive design for all screen sizes
- Smooth scroll behavior

### Anime Cards
- High-quality anime cover images
- Rating display
- Episode count
- Anime status (Ongoing/Completed)
- Description preview
- Watch button

### Header
- Logo with gradient effect
- Search bar (expandable design)
- Navigation links
- Sticky positioning

## Building for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Customization

### Color Scheme

Edit the CSS variables in `src/styles/App.css`:

```css
:root {
  --primary-color: #1f1f2e;
  --secondary-color: #16213e;
  --accent-color: #e94560;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --card-bg: #0f3460;
  --border-color: #16a085;
}
```

### API Queries

Modify queries in `src/services/anilist.js` to customize the data fetched from AniList.

## License

MIT License

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

For support, please open an issue on the GitHub repository.

## Live Demo

Check out the live demo at: https://anime-watch-app.vercel.app (Deploy your own!)
