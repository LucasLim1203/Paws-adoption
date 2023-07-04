import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const PetDetail = () => {
    const { petid } = useParams();

    const [petdata, petdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/pet/" + petid).then((res) => {
            return res.json();
        }).then((resp) => {
            petdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
          

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Pets Profile</h2>
                </div>
                <div className="card-body"></div>

                {petdata &&
                    <div>
                        <h3><b>Pet's Status :</b> {petdata.active}</h3>
                        <h3><b>Pet's name :</b> {petdata.pname}</h3>
                        <h3><b>Pet's Gender :</b> {petdata.gender}</h3>
                        <h3><b>Pet's Detail :</b> {petdata.detail}</h3>


                        <h2>&nbsp;</h2>
                        <h3>Owner's Contact Details</h3>
                        <h5>Name : {petdata.uname}</h5>
                        <h5>Email : {petdata.email}</h5>
                        <h5>Phone : {petdata.phone}</h5>
                        <Link className="btn btn-success" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
           
        </div >
    );
}

export default PetDetail;