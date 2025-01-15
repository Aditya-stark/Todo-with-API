import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "9eadbafef18e4b34840132841251501";
const BASE_URL = "http://api.weatherapi.com/v1";

// Load tasks from localStorage
const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export const fetchWeather = createAsyncThunk(
  "task/fetchWeather",
  async (city) => {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return { city, data: response.data };
  }
);

const initialState = {
  tasks: loadTasksFromStorage(),
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
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTaskCompletion(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
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