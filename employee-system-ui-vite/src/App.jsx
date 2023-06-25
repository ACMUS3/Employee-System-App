import './App.css'
import Navbar from "./components/Navbar.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import EmployeeList from "./components/EmployeeList.jsx";
import UpdateEmployee from "./components/UpdateEmployee.jsx";

const App = () => {
    return (
        <>
            <div className="">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route index element={<EmployeeList/>}/>
                    <Route path="/" element={<EmployeeList/>}></Route>
                    <Route path="/employeelist" element={<EmployeeList/>}></Route>
                    <Route path="/addemployee" element={<AddEmployee/>}></Route>
                    <Route path="/editemployee/:id" element={<UpdateEmployee/>}></Route>
                </Routes>
            </BrowserRouter>
            </div>
        </>
    )

}
export default App
