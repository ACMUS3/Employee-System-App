import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import EmployeeService from "../services/EmployeeService.jsx";
import Employee from "./Employee.jsx";

const EmployeeList = () => {
    const navigate = useNavigate();
    // to check if the data is loaded or not.
    const [loading, setLoading] = useState(true);
    // will save the data of the list of employees that we are getting from the backend api
    const [employees, setEmployees] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    };
    useEffect(() => fetchData, []);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
            .then((res) => {
                if (employees) {
                    setEmployees((prevElement) => {
                        return prevElement.filter((employee) => employee.id !== id)
                    })
                }
            });
    }

    return (
        <div className="container min-w-full">
            <div className="py-4 px-8">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={() => {
                        navigate("/addemployee")
                    }}
                            className="btn btn-success btn-lg py-4 fw-semibold shadow">
                        Add an Employee
                    </button>
                </div>

            </div>

            <div className="">
                <table className="table-hover table table-bordered shadow">
                    <thead className="">
                    <tr className="">
                        <th className="text-center font-medium text-white
                        tracking-wider uppercase py-3 bg-dark ">#
                        </th>
                        <th className="text-center font-medium text-white
                        tracking-wider uppercase py-3 bg-dark">FIRST
                            NAME
                        </th>
                        <th className="text-center font-medium text-white
                         tracking-wider uppercase py-3 bg-dark">LAST
                            NAME
                        </th>
                        <th className="text-center font-medium text-white
                         tracking-wider uppercase py-3 bg-dark">EMAIL
                            ID
                        </th>
                        <th className="font-medium text-white text-center
                        tracking-wider uppercase py-3 bg-dark">ACTIONS
                        </th>
                    </tr>
                    </thead>
                    {!loading && (
                        <tbody className="">
                        {employees.map((emp) => (
                            <Employee employee={emp} deleteEmployee={deleteEmployee} key={emp.id}/>))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>

    )
}
export default EmployeeList
