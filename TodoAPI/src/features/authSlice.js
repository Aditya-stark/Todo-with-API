import { createSlice } from "@reduxjs/toolkit";

//Load initial state from localStorage
const loadAuthState = () => {
  const authData = localStorage.getItem("auth");
  if (!authData) return { isAuthenticated: false, user: null };
  try {
    return JSON.parse(authData);
  } catch {
    return { isAuthenticated: false, user: null };
  }
};

const initialState = loadAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      state.user = { username: "admin" };
      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuthenticated: true,
          user: { username: "admin" },
        })
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
