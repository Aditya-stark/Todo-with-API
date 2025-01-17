// Check if the API key is available and log for debugging
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log('Environment Variables:', import.meta.env);

if (!API_KEY) {
  console.error('Weather API key is missing! Check your .env file');
}


const BASE_URL = 'https://api.openweathermap.org/v1';

export const getWeather = async (city) => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured');
  }

  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
