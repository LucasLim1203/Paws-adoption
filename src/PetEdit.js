import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PetEdit = () => {
    const { petid } = useParams();


    useEffect(() => {
        fetch("http://localhost:8000/pet/" + petid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            unamechange(resp.uname);
            pnamechange(resp.pname);
            emailchange(resp.email);
            phonechange(resp.phone);
            genderchange(resp.gender);
            detailchange(resp.detail);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[pname,pnamechange]=useState("");
    const[uname,unamechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[gender,genderchange]=useState("Male");
    const[detail,detailchange]=useState("");
    const[active,activechange]=useState("available");

    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const petdata={id,uname,pname,gender,detail,email,phone,active};
      

      fetch("http://localhost:8000/pet/"+petid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(petdata)
      }).then((res)=>{
        alert('Saved successfully.')
        window. history. back()
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Pets Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Status: <span className="errmsg">*</span></label>
                                        <select value={gender} onMouseDown={e=>valchange(true)} onChange={e => activechange(e.target.value)} className="form-control">
                                            <option value="Available">Available</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Adopted">Adopted</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input required value={uname} onMouseDown={e=>valchange(true)} onChange={e=>unamechange(e.target.value)} className="form-control"></input>
                                    {uname.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Pet's Name</label>
                                        <input required value={pname} onMouseDown={e=>valchange(true)} onChange={e=>pnamechange(e.target.value)} className="form-control"></input>
                                    {pname.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Pet's Gender <span className="errmsg">*</span></label>
                                        <select value={gender} onMouseDown={e=>valchange(true)} onChange={e => genderchange(e.target.value)} className="form-control">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Pet's Detail</label>
                                        <textarea value={detail} onChange={e => detailchange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>

                              
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/adminPanel/adminPet" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default PetEdit;