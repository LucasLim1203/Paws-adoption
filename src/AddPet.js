import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddPet = () => {

    const[id,idchange]=useState("");
    const[gender,genderchange]=useState("Male");
    const[uname,unamechange]=useState("");
    const[pname,pnamechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[detail,detailchange]=useState("");
    const[active,activechange]=useState("Available");

    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const petdata={uname,pname,email,phone,gender,detail,active};
      

      fetch("http://localhost:8000/pet",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(petdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
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
                                <h2>Create User's Pet</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>User Name<span className="errmsg">*</span></label>
                                            <input required value={uname} onMouseDown={e=>valchange(true)} onChange={e=>unamechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                            
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>E-mail<span className="errmsg">*</span></label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone<span className="errmsg">*</span></label>
                                            <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Pet's Name<span className="errmsg">*</span></label>
                                            <input required value={pname} onMouseDown={e=>valchange(true)} onChange={e=>pnamechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender <span className="errmsg">*</span></label>
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
                                           <Link to="/" className="btn btn-danger">Back</Link>
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

export default AddPet;