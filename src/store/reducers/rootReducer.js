import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        todosState: todoReducer,
        filterState: filterReducer
    }
)