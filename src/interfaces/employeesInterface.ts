import { employeeStatusEnum } from "enums";

export default interface employeesInterface {
  id: number;
  name: string;
  status: employeeStatusEnum;
}
