import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "your_openweathermap_api_key";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = createAsyncThunk(
  "task/fetchWeather",
  async (city) => {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });
    return { city, data: response.data };
  }
);

const initialState = {
  tasks: [],
  weather: {},
  status: "idle",
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({ ...action.payload, completed: false });
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleTaskCompletion(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
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