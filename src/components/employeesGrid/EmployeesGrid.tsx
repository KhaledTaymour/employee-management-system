import { useSelector } from "react-redux";
import { employeesSelector } from "redux/selectors/employeesSelector";
import { Table } from "antd";
import Actions from "components/actions/Actions";

const EmployeesTable = () => {
  const employees = useSelector(employeesSelector);

  const columns = [
    { title: "Employee Id", dataIndex: "id", key: "id" },
    { title: "Employee Name", dataIndex: "name", key: "name" },
    { title: "Employee Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      dataIndex: "status",
      key: "status",
      render: (text: any, record: any) => {
        return <Actions record={record} status={record.status} />;
      },
    },
  ];

  columns.sort(function (a, b) {
    if (a.key < b.key) {
      return -1;
    }
    if (a.key > b.key) {
      return 1;
    }
    return 0;
  });

  return <Table columns={columns} dataSource={employees} />;
};

export default EmployeesTable;
