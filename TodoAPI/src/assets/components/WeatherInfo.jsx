import React, { useState, useEffect, useCallback, memo } from 'react';
import { getWeather } from '../../utils/weatherService';

const WeatherInfo = memo(({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const weatherData = await getWeather(city);
      if (weatherData) {
        setWeather(weatherData);
      } else {
        setError('Unable to fetch weather data');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city, fetchWeather]);

  if (!city) return null;
  if (loading) return <span className="text-sm text-gray-400">Loading...</span>;
  if (error) return <span className="text-sm text-red-400">{error}</span>;
  if (!weather) return null;

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <img
        src={`https://openweathermap.org/img/w/${weather.icon}.png`}
        alt={weather.description}
        className="w-6 h-6"
      />
      <span>{weather.temp}°C</span>
    </div>
  );
});

WeatherInfo.displayName = 'WeatherInfo';

export default WeatherInfo;
