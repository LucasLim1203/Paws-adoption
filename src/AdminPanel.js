import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin = () => {
    const navigate=useNavigate();
    const [haveview, viewchange] = useState(false);

    useEffect(() => {
        GetUserAccess();
       
    }, []);

    const GetUserAccess = () => {
        const userrole = sessionStorage.getItem('userrole') != null ? sessionStorage.getItem('userrole').toString() : '';
        fetch("http://localhost:8000/roleaccess?role=" + userrole + "&menu=customer").then(res => {
            if (!res.ok) {
                navigate('/');
            toast.warning('You are not authorized to access');
                return false;
            }
            return res.json();
        }).then(res => {
            console.log(res);
            if (res.length > 0) {
                viewchange(true);
            }else{
                navigate('/');
            toast.warning('You are not authorized to access');
            }
        })
    }


    

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Admin Panel</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td><b>Customer's Pet Details</b></td>
                                <td><b>User's Account Details</b></td>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td><div className="cenbtn">
                        <Link to="adminPet" className="btn btn-primary">View Details</Link>
                    </div></td>
                    <td><div className="cenbtn">
                        <Link to="Account" className="btn btn-primary">View Details</Link>
                    </div></td>
                            </tr>

                            

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
        
    );
}

export default Admin;