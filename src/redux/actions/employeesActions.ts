import employeesInterface from "interfaces/employeesInterface";
import { actionTypeEnum } from "enums";
import { Dispatch } from "redux";
import { actionDispatchTypes } from "redux/actionTypes";

export const fillEmployeesFromDB =
  (data: employeesInterface[]) =>
  async (dispatch: Dispatch<actionDispatchTypes>) => {
    dispatch({
      type: actionTypeEnum.FILL_USERS,
      payload: data,
    });
  };

export const addNewEmployeeToStore =
  (data: employeesInterface) => (dispatch: Dispatch<actionDispatchTypes>) => {
    dispatch({
      type: actionTypeEnum.ADD_USER,
      payload: data,
    });
  };

export const updateEmployeeInStore =
  (data: employeesInterface) =>
  async (dispatch: Dispatch<actionDispatchTypes>) => {
    dispatch({
      type: actionTypeEnum.UPDATE_USER,
      payload: data,
    });
  };
