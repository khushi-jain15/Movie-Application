# 🎬 Movie Application

A modern, responsive React.js application for discovering and exploring movies. Built with React Router, Axios, and The Movie Database (TMDb) API.

## ✨ Features

### ✅ Core Features
- **Home Page**: Display trending and popular movies with posters, titles, and ratings
- **Search Functionality**: Search for movies by keywords with real-time results
- **Movie Details Page**: Comprehensive movie information including cast, trailer, and detailed info
- **Genre/Category Filtering**: Filter movies by genres (Action, Comedy, Drama, etc.)
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode Toggle**: Switch between themes for better user experience
- **Pagination**: Navigate through movie pages with previous/next functionality

### 🎨 Design Features
- Modern, clean UI with smooth animations
- Responsive grid layout for movie cards
- Hover effects and transitions
- CSS custom properties for easy theming
- Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up API Key (Optional)**
   
   To use real movie data, you'll need a TMDb API key:
   
   - Visit [The Movie Database](https://www.themoviedb.org/)
   - Create an account and get your API key
   - Create a `.env` file in the root directory:
     ```
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```
   
   **Note**: The app works with mock data if no API key is provided.

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
movie-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.js          # Individual movie card component
│   │   ├── MovieCard.css
│   │   ├── MovieList.js          # Grid of movie cards
│   │   ├── MovieList.css
│   │   ├── MovieDetails.js       # Detailed movie page
│   │   ├── MovieDetails.css
│   │   ├── SearchBar.js          # Search functionality
│   │   ├── SearchBar.css
│   │   ├── GenreFilter.js        # Genre filtering
│   │   ├── GenreFilter.css
│   │   ├── ThemeToggle.js        # Dark/light mode toggle
│   │   ├── ThemeToggle.css
│   │   ├── Pagination.js         # Page navigation
│   │   └── Pagination.css
│   ├── pages/
│   │   ├── Home.js               # Main home page
│   │   └── Home.css
│   ├── api/
│   │   └── movies.js             # API utilities and functions
│   ├── App.js                    # Main app component
│   ├── App.css
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React.js**: Frontend framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **CSS3**: Styling with custom properties and responsive design
- **The Movie Database API**: Movie data source

## 🎯 Key Features Explained

### Home Page
- Displays trending and popular movies
- Toggle between "Trending" and "Popular" views
- Responsive grid layout
- Movie cards with hover effects

### Search Functionality
- Real-time search with TMDb API
- Search by movie title
- Displays search results in the same grid format

### Movie Details Page
- Comprehensive movie information
- Cast and crew details
- Embedded YouTube trailers
- Back navigation to home

### Genre Filtering
- Filter movies by genre
- Multiple genre selection
- Clear filter option

### Dark/Light Mode
- Toggle between themes
- Persistent theme preference
- Smooth transitions

### Pagination
- Navigate through movie pages
- Previous/Next buttons
- Page number indicators
- Responsive pagination controls

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full grid layout with hover effects
- **Tablet**: Adjusted grid columns and spacing
- **Mobile**: Single column layout with touch-friendly buttons

## 🔧 Customization

### Adding New Features
1. Create new components in the `src/components/` directory
2. Add corresponding CSS files
3. Import and use in the main App or pages

### Styling
- CSS custom properties for easy theming
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Dark/light theme support

### API Integration
- Modify `src/api/movies.js` for different API endpoints
- Add new API functions as needed
- Handle API errors gracefully

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set environment variables if needed
4. Deploy automatically

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:
1. Check the console for error messages
2. Verify your API key is correct
3. Ensure all dependencies are installed
4. Check browser compatibility

---

**Happy coding! 🎬✨** 