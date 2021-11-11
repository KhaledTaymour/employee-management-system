import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { fillEmployeesFromDB } from "redux/actions/employeesActions";
import EmployeesTable from "components/employeesGrid/EmployeesGrid";
import { getEmployeesFromDB } from "handlers/apiHandler";
import AddNewEmployee from "components/addNewEmployee/AddNewEmployee";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getEmployeesFromDB();
        dispatch(fillEmployeesFromDB(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>{`Employee Management System`}</header>
      <AddNewEmployee />
      <EmployeesTable />
    </div>
  );
}

export default App;
