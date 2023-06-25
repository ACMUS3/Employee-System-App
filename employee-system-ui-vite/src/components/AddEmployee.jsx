import {useState} from "react";
import EmployeeService from "../services/EmployeeService.jsx";
import {useNavigate} from "react-router-dom";


const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeelist")
        }).catch((error) => {
            console.log(error);
        });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });
    };

    return (
        <div className="flex max-w-xl shadow border-b mx-auto">
            <div className="px-5 py-5">
                <div
                    className="btn btn-success tracking-wider">
                    <h1 className="px-14 fw-semibold">Add an Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-5">
                    <label htmlFor="first name" className="block text-gray-500 text-sm font-normal">First Name</label>

                    <input type="text" name="firstName" value={employee.firstName}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 shadow bg-blend-color mt-2 border px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-5">
                    <label htmlFor="last name" className="block text-gray-500 text-sm font-normal">Last Name</label>

                    <input type="text" name="lastName" value={employee.lastName}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 shadow bg-blend-color mt-2 border px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-5">
                    <label htmlFor="email Id" className="block text-gray-500 text-sm font-normal">Email</label>

                    <input type="text" name="emailId" value={employee.emailId}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 shadow bg-blend-color mt-2 border px-2 py-2 "></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-5 pt-4 space-x-5 px-16">
                    <button onClick={saveEmployee}
                            className="btn btn-lg btn-success py-2 px-6">
                        Save
                    </button>
                    <button
                        onClick={reset}
                        className="btn btn-lg btn-danger py-2 px-6">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AddEmployee
