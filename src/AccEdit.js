import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AccEdit = () => {
    const { userid } = useParams();


    useEffect(() => {
        fetch("http://localhost:8000/user/" + userid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            passwordchange(resp.password);
            emailchange(resp.email);
            phonechange(resp.phone);
            countrychange(resp.country)
            addresschange(resp.address);
            rolechange(resp.role);
            genderchange(resp.gender);

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[password,passwordchange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[country,countrychange]=useState("Malaysia");
    const[address,addresschange]=useState("");
    const[role,rolechange]=useState("user");
    const[gender,genderchange]=useState("Mr.");



    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const userdata={id,name,password,gender,country,address,role,email,phone};
      

      fetch("http://localhost:8000/user/"+userid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
      }).then((res)=>{
        alert('Saved successfully.')
        window. history. back()
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>User Edit</h1>
                    </div>
                    <div className="card-body">

                        <div className="row">
                        <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Role <span className="errmsg">*</span></label>
                                    <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Full Name <span className="errmsg">*</span></label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Phone <span className="errmsg"></span></label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Country <span className="errmsg">*</span></label>
                                    <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                                        <option value="malaysia">Malaysia</option>
                                        <option value="singapore">Singapore</option>
                                        <option value="thailand">Thailand</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender === 'Mr.'} onChange={e => genderchange(e.target.value)} name="gender" value="Mr." className="app-check"></input>
                                    <label>Mr.</label>
                                    <input type="radio" checked={gender === 'Ms.'} onChange={e => genderchange(e.target.value)} name="gender" value="Ms." className="app-check"></input>
                                    <label>Ms.</label>
                                </div>
                            </div>
                            

                        </div>

                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Register</button> |
                        <Link to={'/adminPanel/Account'} className="btn btn-danger">Close</Link>
                    </div>
                </div>
            </form>
        </div>


    </div>
     );
}
 
export default AccEdit;