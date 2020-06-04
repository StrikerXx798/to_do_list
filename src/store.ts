import {applyMiddleware, combineReducers, createStore} from "redux";
import todolistReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    todolist: todolistReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
