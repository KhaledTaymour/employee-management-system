import { actionTypeEnum } from "enums";
import employeesInterface from "interfaces/employeesInterface";

export type fillUsersActionType = {
  type: actionTypeEnum.FILL_USERS;
  payload: employeesInterface[];
};

export type addUserActionType = {
  type: actionTypeEnum.ADD_USER;
  payload: employeesInterface;
};

export type updateUserActionType = {
  type: actionTypeEnum.UPDATE_USER;
  payload: employeesInterface;
};

export type actionDispatchTypes =
  | fillUsersActionType
  | addUserActionType
  | updateUserActionType;
