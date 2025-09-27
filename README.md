# Weather Application 🌤️

A modern, responsive weather application that provides real-time weather information for any city worldwide. Built with vanilla HTML, CSS, and JavaScript, featuring a beautiful glassmorphism design and smooth animations.

![Weather App](weather-favicon.png)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Comprehensive Weather Info**: 
  - Current temperature, feels-like temperature
  - Minimum and maximum temperatures
  - Weather conditions with descriptions
  - Weather icons
  - Atmospheric pressure
  - Humidity levels
  - Wind speed
  - Geographic coordinates (latitude/longitude)
- **Modern UI/UX**: 
  - Glassmorphism design with backdrop blur effects
  - Smooth animations and hover effects
  - Responsive design for all devices
  - Font Awesome icons for enhanced visuals
- **Error Handling**: Robust error handling for API failures and invalid city names

## 🚀 Demo

Enter any city name to get instant weather information with a beautiful, intuitive interface.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - Modern styling with CSS Grid and Flexbox
  - Glassmorphism effects with backdrop-filter
  - CSS animations and transitions
  - Google Fonts (Poppins)
  - Font Awesome icons
- **JavaScript (ES6+)**:
  - Async/await for API calls
  - Fetch API for HTTP requests
  - DOM manipulation
  - Error handling with try-catch blocks
- **OpenWeatherMap API**: Real-time weather data source

## 📦 Installation & Setup

1. **Clone or download** this repository to your local machine

2. **Get API Key**:
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key
   - Replace the existing API key in `script.js`:
     ```javascript
     const apiKey = "YOUR_API_KEY_HERE";
     ```

3. **Launch the application**:
   - Open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code for better development experience

## 🎯 Usage

1. **Enter City Name**: Type the name of any city in the input field
2. **Get Weather**: Click the "Get Weather" button or press Enter
3. **View Results**: The app will display comprehensive weather information including:
   - City details (name, coordinates)
   - Weather conditions with icon
   - Temperature information (current, feels like, min/max)
   - Additional data (pressure, humidity, wind speed)

## 📁 Project Structure

```
Weather Application/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with glassmorphism design
├── script.js           # JavaScript functionality and API integration
├── weather-bg.jpg      # Background image
├── weather-favicon.png # Favicon
└── README.md          # Project documentation
```

## 🎨 Design Features

- **Glassmorphism Effect**: Modern glass-like transparent elements
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Smooth Animations**: Fade-in and slide-up animations
- **Interactive Elements**: Hover effects and button animations
- **Professional Typography**: Poppins font family for clean readability

## 🔧 API Integration

The application uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: 
  - `q`: City name
  - `appid`: API key
  - `units`: Metric system for temperature in Celsius
- **Weather Icons**: Fetched from `https://openweathermap.org/img/wn/`

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

Mobile-specific optimizations include:
- Adjusted container padding and sizing
- Single-column temperature grid layout
- Optimized font sizes for smaller screens

## 🚨 Error Handling

- **Network Errors**: Handles API connection failures
- **Invalid Cities**: Displays appropriate messages for non-existent locations
- **API Rate Limits**: Manages API response errors gracefully
- **Image Loading**: Fallback for weather icon loading failures

## 🔮 Future Enhancements

- [ ] Geolocation-based weather detection
- [ ] Dark/light theme toggle
- [ ] Severe weather alerts


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Poppins font family


---

**Made with ❤️ and modern web technologies**