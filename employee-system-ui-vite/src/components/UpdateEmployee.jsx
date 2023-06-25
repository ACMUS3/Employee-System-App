import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import EmployeeService from "../services/EmployeeService.jsx";

const UpdateEmployee = () => {
    const {id} = useParams(); // will bring the id from the URL
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: ""
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById();
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(employee);
        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                navigate("/employeeList");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="flex max-w-xl shadow border-b mx-auto">
            <div className="px-5 py-5">
                <div className="btn btn-success px-4 py-4 tracking-wider">
                    <h1 className="btn-lg fw-semibold">Update an Employee</h1>
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

                    <button onClick={updateEmployee}
                            className="btn btn-lg btn-success py-2 px-6">
                        Update
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="btn btn-lg btn-danger py-2 px-6">
                        Cancel
                    </button>

                </div>
            </div>
        </div>
    );
}
export default UpdateEmployee
