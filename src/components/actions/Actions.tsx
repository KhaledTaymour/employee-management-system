import { useDispatch } from "react-redux";
import { employeeStatusEnum } from "enums";
import React from "react";
import "./Actions.scss";
import { Button, notification } from "antd";
import { EditEmployeeInDB } from "handlers/apiHandler";
import employeesInterface from "interfaces/employeesInterface";
import { AxiosResponse } from "axios";
import { updateEmployeeInStore } from "redux/actions/employeesActions";

interface Props {
  record: employeesInterface;
  status: employeeStatusEnum;
}
const Actions: React.FC<Props> = ({ record, status }) => {
  const dispatch = useDispatch();

  const handleChangeStatus = async (e: React.MouseEvent) => {
    const target: HTMLButtonElement = e.currentTarget as HTMLButtonElement;

    if (record.status !== target.value) {
      try {
        const { data } = (await EditEmployeeInDB(
          record,
          target.value as employeeStatusEnum
        )) as AxiosResponse<any, any>;

        const updatedEmpData: employeesInterface = data;

        dispatch(updateEmployeeInStore(updatedEmpData));
        openNotification(
          "Success",
          `The Employee ${record.name}'s status was successfully changed from ${record.status} to ${target.value}`
        );
      } catch (error) {
        console.error(error);
        openNotification("Failed", `Changing Employee status failed`);
      }
    }
  };

  const openNotification = (msgTitle: string, msgBody: string) => {
    notification.open({
      message: msgTitle,
      description: msgBody,
      className: "custom-class",
      style: {
        width: 600,
      },
    });
  };

  return (
    <div className="actions">
      <div>
        <Button
          type={status === employeeStatusEnum.ADDED ? "primary" : "dashed"}
          onClick={handleChangeStatus}
          value={employeeStatusEnum.ADDED}
        >{`Added`}</Button>
      </div>
      <div>
        <Button
          type={status === employeeStatusEnum.INCHECK ? "primary" : "dashed"}
          onClick={handleChangeStatus}
          value={employeeStatusEnum.INCHECK}
        >{`In-Check`}</Button>
      </div>
      <div>
        <Button
          type={status === employeeStatusEnum.APPROVED ? "primary" : "dashed"}
          onClick={handleChangeStatus}
          value={employeeStatusEnum.APPROVED}
        >{`Approved`}</Button>
      </div>
      <div>
        <Button
          type={status === employeeStatusEnum.ACTIVE ? "primary" : "dashed"}
          onClick={handleChangeStatus}
          value={employeeStatusEnum.ACTIVE}
        >{`Active`}</Button>
      </div>
      <div>
        <Button
          type={status === employeeStatusEnum.INACTIVE ? "primary" : "dashed"}
          onClick={handleChangeStatus}
          value={employeeStatusEnum.INACTIVE}
        >{`Inactive`}</Button>
      </div>
    </div>
  );
};

export default Actions;
