import {useNavigate} from "react-router-dom";

const Employee = ({employee,deleteEmployee}) => {
    const navigate = useNavigate();
    const editEmployee = (e,id) =>{
        e.preventDefault();
        navigate(`/editemployee/${id}`)
    };

    return (
        <tr key={employee.id}>
            <td className="text-center py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-600">{employee.id} </div>
            </td>
            <td className="text-center  py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-600">{employee.firstName}</div>
            </td>
            <td className="text-center py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-600">{employee.lastName}</div>
            </td>
            <td className="text-center py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-600 ">{employee.emailId}</div>
            </td>

            <td className="text-center space-x-10 ">
                <button onClick={(e) => editEmployee(e,employee.id)}
                    className="btn btn-warning px-8 btn-lg hover:cursor-pointer">
                    Edit
                </button>
                <button onClick={(e) => deleteEmployee(e,employee.id)}
                    className="btn btn-danger btn-lg hover:cursor-pointer">
                    Delete
                </button>
            </td>
        </tr>
    );
}
export default Employee
