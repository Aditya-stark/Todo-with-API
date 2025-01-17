const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

const BASE_URL = 'https://api.openweathermap.org/v1/';

const cache = new Map();
const CACHE_DURATION = 30 * 60 * 1000;

export const getWeather = async (city) => {
  const cached = cache.get(city);
  if (cached?.timestamp > Date.now() - CACHE_DURATION) {
    return cached.data;
  }

  try {
    const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
    if (!response.ok) throw new Error('Weather fetch failed');
    
    const data = await response.json();
    const weatherData = {
      temp: Math.round(data.main.temp),
      icon: data.weather[0].icon,
      description: data.weather[0].description
    };

    cache.set(city, { data: weatherData, timestamp: Date.now() });
    return weatherData;
  } catch (error) {
    console.error('Weather error:', error);
    return null;
  }
};
