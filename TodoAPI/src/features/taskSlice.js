/**
 * Redux Toolkit slice for managing tasks and weather data
 * This slice handles:
 * - Task management (add, delete, toggle completion)
 * - Weather data fetching and storage
 * - Local storage persistence
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "9eadbafef18e4b34840132841251501";
const BASE_URL = "http://api.weatherapi.com/v1";

/**
 * Loads tasks from localStorage
 * @returns {Array} Array of tasks or empty array if no tasks found
 */
const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

/**
 * Async thunk for fetching weather data
 * Makes API call to weatherapi.com and returns city-specific weather data
 */
export const fetchWeather = createAsyncThunk(
  "task/fetchWeather",
  async (city) => {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
    );
    return { city, data: response.data };
  }
);

/**
 * Initial state for the task slice
 * @property {Array} tasks - Array of task objects loaded from localStorage
 * @property {Object} weather - Object containing weather data for each city
 * @property {string} status - API call status ('idle' | 'loading' | 'succeeded' | 'failed')
 * @property {string|null} error - Error message if API call fails
 */
const initialState = {
  tasks: loadTasksFromStorage(),
  weather: {},
  status: "idle",
  error: null,
};

/**
 * Task slice containing reducers and actions for task management
 */
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    /**
     * Adds a new task to the state and updates localStorage
     */
    addTask(state, action) {
      state.tasks.push({ ...action.payload, completed: false });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    /**
     * Removes a task from the state and updates localStorage
     */
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    /**
     * Toggles task completion status and updates localStorage
     */
    toggleTaskCompletion(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
  /**
   * Extra reducers for handling async weather API calls
   */
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather[action.payload.city] = action.payload.data;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;
export default taskSlice.reducer;
