import configs from "app.config.json";
import axios, { AxiosResponse } from "axios";
import { employeeStatusEnum } from "enums";
import employeesInterface from "interfaces/employeesInterface";

export const getEmployeesFromDB: () => Promise<AxiosResponse<any, any>> =
  async () => {
    try {
      return (await axios.get(
        configs.services.domain + configs.services.getAllEmployees
      )) as AxiosResponse<any, any>;
    } catch (error) {
      return error as AxiosResponse<any, any>;
    }
  };

export const createNewEmployeeInDB: (
  employeeName: string
) => Promise<AxiosResponse<any, any> | undefined> = async (employeeName) => {
  try {
    const { data } = await getEmployeesFromDB();

    const newIndex = data[data.length - 1].id + 1;
    const newEmployeeData = {
      id: newIndex,
      name: employeeName,
      status: employeeStatusEnum.ADDED,
    };

    try {
      return (await axios.post(
        configs.services.domain + configs.services.createEmployee,
        newEmployeeData
      )) as AxiosResponse<any, any>;
    } catch (error) {
      return error as AxiosResponse<any, any>;
    }
  } catch (error) {
    console.error(error);
  }
};

export const EditEmployeeInDB: (
  employee: employeesInterface,
  newStatus: employeeStatusEnum
) => Promise<AxiosResponse<any, any> | undefined> = async (
  employee,
  newStatus
) => {
  try {
    const currentEmployeeId: number = employee.id;
    const currentEmployeeName: string = employee.name;

    try {
      const body = {
        status: newStatus,
        name: currentEmployeeName,
      };
      return (await axios.put(
        configs.services.domain +
          configs.services.updateEmployee.replace(
            "{employee_id}",
            currentEmployeeId.toString()
          ),
        body,
        {
          // Config
        }
      )) as AxiosResponse<any, any>;
    } catch (error) {
      return error as AxiosResponse<any, any>;
    }
  } catch (error) {
    console.error(error);
  }
};
