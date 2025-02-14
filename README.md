# Weather Site

# 🌦 Weather Website

## 📌 Project Overview

The **Weather Website** is a web application that provides real-time weather information for different cities. Users can select a city from a dropdown menu to view the current weather and a **5-day forecast**, displayed in a visually appealing way using a **carousel (Swiper.js)**.

## 🌟 Features

- **Current Weather**: Displays temperature, weather conditions, and real feel.
- **5-Day Forecast**: Shows daily weather updates using a **carousel** for easy navigation.
- **City Selection**: Users can switch between multiple cities via a dropdown menu.
- **Responsive Design**: Works on **mobile, tablet, and desktop**.
- **Autoplay Slideshow**: The forecast automatically scrolls between days.

## 🛠 Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript
  - Bootstrap 5
  - Swiper.js (for the weather forecast carousel)
- **API Integration**:
  - OpenWeather API (for real-time weather data)

## 🚀 Installation & Setup

To run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/weather-website.git
   cd weather-website
   ```

2. **Install Dependencies (if needed)**

   ```bash
   npm install  # Only if using Node.js for dependencies
   ```

3. **API Configuration:**

   - Obtain an API key from [OpenWeather](https://openweathermap.org/)
   - Replace `API_KEY` in `api/endpoints.js` with your actual key

4. **Run the Website:**
   - Open `index.html` in a browser
   - OR use a local server like Live Server (VS Code Extension)

## 🏗️ Project Structure

```
📁 weather-website
├── 📂 api
│   ├── endpoints.js  # API URL and request functions
├── 📂 utils
│   ├── data.js       # Helper functions
│   ├── weather.js    # Fetch and process weather data
├── 📂 sections
│   ├── ChooseLocation.js
│   ├── CurrentWeather.js
│   ├── WeatherForecast.js
├── index.html        # Main HTML file
├── style.css         # Global CSS styles
├── index.js          # Main JavaScript file
└── README.md         # Documentation
```

## 🎯 Usage

1. Open the website and select a **city** from the dropdown.
2. View the **current weather conditions** and real feel temperature.
3. Navigate through the **5-day forecast using the carousel**.

## 🎨 Customization

- To change the **theme colors**, modify `style.css`.
- To add **new cities**, update the dropdown menu in `index.html` and `ChooseLocation.js`.
- To modify API responses, check `weather.js`.

## 🤝 Contributors

- **Filip Radu Calin** - Developer
  💡

---

🚀 **Enjoy your real-time weather updates!** 🌍
