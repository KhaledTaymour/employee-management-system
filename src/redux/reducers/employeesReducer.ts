import { actionTypeEnum, employeeStatusEnum } from "enums";
import employeesInterface from "interfaces/employeesInterface";
import { actionDispatchTypes } from "redux/actionTypes";

const initialState: employeesInterface[] = [
  {
    id: 0,
    name: "",
    status: employeeStatusEnum.ADDED,
  },
];

const employeesReducer = (
  state: employeesInterface[] = initialState,
  action: actionDispatchTypes
): employeesInterface[] => {
  switch (action.type) {
    case actionTypeEnum.FILL_USERS:
      return action.payload;
    case actionTypeEnum.ADD_USER:
      return [...state, action.payload];
    case actionTypeEnum.UPDATE_USER:
      return state.map((emp) =>
        emp.id === action.payload.id
          ? { ...emp, status: action.payload.status }
          : emp
      );
    default:
      return state;
  }
};

export default employeesReducer;
