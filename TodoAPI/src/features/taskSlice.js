import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "9eadbafef18e4b34840132841251501";
const BASE_URL = "http://api.weatherapi.com/v1";

export const fetchWeather = createAsyncThunk(
  "task/fetchWeather",
  async (city) => {
    console.log(city);
    // changes axios.get() => axios.post(); URL = {http://api.weatherapi.com/v1/current.json?key=9eadbafef18e4b34840132841251501&q=Paris}
    const response = await axios.post(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
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