import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/taskSlice";
import authReducer from "./features/authSlice";


const store = configureStore({
  reducer: {
    task: taskReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // Disable immutable state invariant middleware
      serializableCheck: false, // Optionally disable serializable state invariant middleware
    }),
});

export default store;
