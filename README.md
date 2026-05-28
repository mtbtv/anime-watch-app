# Anime Watch App - Android TV Remote Friendly

A modern anime watching website built with React and AniList API. **Fully optimized for Android TV remote control navigation** with multiple carousels for popular, trending, and most-watched anime.

## 🎮 Features

### TV Remote Control Features
- ⬆️⬇️ **Vertical Navigation** - Move between carousels with up/down arrows
- ⬅️➡️ **Horizontal Navigation** - Scroll through anime with left/right arrows
- ✓ **Select/Play** - Press enter to select and play anime
- 📺 **Visual Focus Indicators** - Clear focus indicators for TV viewing
- 🎯 **Smart Focus Management** - Auto-scroll focused items into view
- 📊 **Section Indicators** - Shows which carousel is currently active

### Anime Features
- 🔥 **Popular Anime Carousel** - Display trending popular anime
- 📺 **Most Watched Anime Carousel** - Show most-watched anime series
- ⭐ **Top Rated Anime Carousel** - Featured top-rated anime
- 🎬 **Trending Now Carousel** - Currently trending anime
- 🔍 **Search Functionality** - Search for your favorite anime
- 📱 **Responsive Design** - Works on all devices including TV
- 🎨 **Modern UI** - Beautiful and intuitive interface with smooth animations

## 🕹️ Remote Control Guide

| Button | Action |
|--------|--------|
| **⬆️ UP** | Move to previous carousel section |
| **⬇️ DOWN** | Move to next carousel section |
| **⬅️ LEFT** | Scroll carousel left / Previous anime |
| **➡️ RIGHT** | Scroll carousel right / Next anime |
| **✓ ENTER** | Select and play anime |

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **API**: AniList GraphQL API
- **HTTP Client**: Axios
- **Styling**: CSS3 with gradients and animations
- **Remote Control**: Keyboard event handling for TV remotes

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- An Android TV or device with remote control capability

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

### Deploying to Android TV

1. Build for production:
```bash
npm run build
```

2. Deploy to a web server or use services like:
   - Vercel
   - Netlify
   - Firebase Hosting

3. Access from your Android TV by:
   - Opening the browser (Chrome, Firefox)
   - Navigating to your app URL
   - Using your TV remote to control

## Project Structure

```
anime-watch-app/
├── src/
│   ├── components/
│   │   ├── Carousel.jsx       # TV-friendly carousel
│   │   ├── AnimeCard.jsx      # Card with focus states
│   │   ├── Header.jsx         # Header component
│   │   └── RemoteGuide.jsx    # Remote control guide overlay
│   ├── hooks/
│   │   └── useRemoteControl.js # Remote control handler
│   ├── services/
│   │   └── anilist.js         # AniList API service
│   ├── styles/
│   │   ├── App.css            # Main app styles
│   │   ├── Carousel.css       # Carousel with TV focus
│   │   ├── AnimeCard.css      # Card focus effects
│   │   ├── Header.css         # Header styles
│   │   └── RemoteGuide.css    # Guide overlay styles
│   ├── App.jsx                # Main app component
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## TV Remote Control Implementation

### useRemoteControl Hook
The app uses a custom React hook to handle remote control input:

- Arrow keys (⬆️⬇️⬅️➡️) for navigation
- Enter key (✓) for selection
- Automatic state management for focused items
- Smooth scrolling and transitions

### Focus Management
- Active carousel is highlighted with visual border
- Focused cards have scale effect and glow
- Auto-scroll ensures focused items are visible
- Section indicators show current position

### Visual Feedback
- Pulse animation on focused cards
- Border highlight for active sections
- Glow effects for better TV visibility
- Large touch targets for remote control

## API Documentation

This project uses the [AniList API](https://anilist.co/graphiql) for fetching anime data.

### Available Carousels

1. **Trending Anime** - Currently trending anime sorted by trending score
2. **Popular Anime** - Most popular anime sorted by popularity
3. **Top Rated** - Highest rated anime sorted by score
4. **Most Watched** - Most watched anime on AniList

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

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

### Remote Control Keys

Modify key handlers in `src/hooks/useRemoteControl.js` to support:
- Numeric keys (0-9) for quick access
- Color buttons (RED, GREEN, YELLOW, BLUE)
- Play/Pause buttons
- Custom remote commands

### Focus Effects

Adjust focus animations in CSS files:
- `src/styles/AnimeCard.css` - Card focus effects
- `src/styles/Carousel.css` - Carousel active state
- `src/styles/App.css` - Section indicators

## Browser Compatibility

- ✅ Chrome/Chromium (Android TV)
- ✅ Firefox (Android TV)
- ✅ Edge
- ✅ Safari (macOS/iOS)
- ✅ Desktop browsers

## Performance Tips for TV

1. **Optimize Images**
   - AniList images are already optimized
   - Consider lazy loading for more carousels

2. **Network**
   - Use CDN for faster delivery
   - Consider caching strategies

3. **Rendering**
   - Minimal animations on TV devices
   - Efficient CSS for large screens

## License

MIT License

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

For support, please open an issue on the GitHub repository.

## Live Demo

Deploy and access from your Android TV at your hosting URL!

## Troubleshooting

### Remote keys not working?
- Ensure your TV browser supports keyboard events
- Check if remote is properly paired
- Try using mouse/trackpad as alternative

### Focus not visible?
- Adjust `--border-color` and `--accent-color` for better visibility
- Increase font sizes in TV settings
- Use TV's picture modes for optimal display

### Anime not loading?
- Check internet connection
- Verify AniList API is accessible
- Check browser console for errors
