import axios from "axios";

const API_KEY = "9eadbafef18e4b34840132841251501";
const BASE_URL = "https://api.weatherapi.com/v1";

export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });

    return response.data;
  } catch (error) {
    console.error("ERROR FETCHING WEATHER DATA", error);
  }
};
