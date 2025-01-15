// Import axios for making HTTP requests
import axios from "axios";

// Weather API credentials and configuration
const API_KEY = "9eadbafef18e4b34840132841251501";
const BASE_URL = "https://api.weatherapi.com/v1";

/**
 * Fetches weather data for a specified city
 * @param {string} city - The name of the city to get weather data for
 * @returns {Promise<Object>} The weather data response
 */
export const getWeather = async (city) => {
  try {
    // Make POST request to weather API with city parameter
    // Example URL: http://api.weatherapi.com/v1/current.json?key=9eadbafef18e4b34840132841251501&q=Paris
    const response = await axios.post(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
    );
    return response.data;
  } catch (error) {
    // Log any errors that occur during the API call
    console.error("ERROR FETCHING WEATHER DATA", error);
  }
};
