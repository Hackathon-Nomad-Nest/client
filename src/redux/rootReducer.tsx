import { combineReducers } from "@reduxjs/toolkit";
import taskSlice from "./Slices/taskSlice";
import todoSlice from "./Slices/todoSlice";

const rootReducer = combineReducers({
  todos: todoSlice,
  tasks: taskSlice,
})

export default rootReducer;