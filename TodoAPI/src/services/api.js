import axios from "axios";

const API_KEY = "9eadbafef18e4b34840132841251501";
const BASE_URL = "https://api.weatherapi.com/v1";

export const getWeather = async (city) => {
  try {
    // changes in url: http://api.weatherapi.com/v1/current.json?key=9eadbafef18e4b34840132841251501&q=Paris
    const response = await axios.post(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (error) {
    console.error("ERROR FETCHING WEATHER DATA", error);
  }
};
