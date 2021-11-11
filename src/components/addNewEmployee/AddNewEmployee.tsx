import "./AddNewEmployee.scss";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification } from "antd";
import { AxiosResponse } from "axios";
import { createNewEmployeeInDB } from "handlers/apiHandler";
import { addNewEmployeeToStore } from "redux/actions/employeesActions";
import employeesInterface from "interfaces/employeesInterface";

const AddNewEmployee: React.FC = () => {
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    try {
      const { data } = (await createNewEmployeeInDB(
        values.name
      )) as AxiosResponse<any, any>;

      const newEmpData: employeesInterface = data;
      dispatch(addNewEmployeeToStore(newEmpData));

      const input = document.querySelector("#basic_name") as HTMLInputElement;
      if (input) {
        input.value = "";
      }
      openNotification(
        "Success",
        `The Employee ${newEmpData.name} was successfully added`
      );
    } catch (error) {
      console.error(error);
      openNotification("Failed", `Adding a new Employee failed`);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
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
    <Form
      className="new-employee-form"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2>New Employee</h2>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input employee name!" }]}
      >
        <Input placeholder={`employee name`} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {`Submit`}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddNewEmployee;
