import { combineReducers } from "redux";
import employees from "./employeesReducer";

const reducer = combineReducers({ employees });

export default reducer;

export type RootState = ReturnType<typeof reducer>;
