import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PetListing = () => {
    const [petdata, petdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/adminPet/detail/" + id);
    }

    useEffect(() => {
        fetch("http://localhost:8000/pet").then((res) => {
            return res.json();
        }).then((resp) => {
            petdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])


    return (
        <div className="container">
            <h1>Welcome To PAW PAW</h1>
            <div className="card">
                <div className="card-title">
                    <h2>Pets Listing</h2>
                </div>
                <div className="card-body">
                   
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Owner's Name</td>
                                <td>Pet's name</td>
                                <td>Pet's Gender</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {petdata &&
                                petdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.uname}</td>
                                        <td>{item.pname}</td>
                                        <td>{item.gender}</td>
                                        <td><a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a></td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default PetListing;