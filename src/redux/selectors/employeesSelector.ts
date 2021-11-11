import { RootState } from "redux/reducers/rootReducer";

export const employeesSelector = (state: RootState) => state.employees;

export default employeesSelector;
