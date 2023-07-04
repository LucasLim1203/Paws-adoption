import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
                <div className="header">

                    <Link to={'/'}>Home</Link>
                    | 
                    <Link to={'/addpet'}>Add Pets</Link>
                    |                    
                    <Link to={'/adminPanel'}>Admin Panel</Link>

                    <span style={{ marginLeft: '65%' }}>Welcome <b>{displayusername}</b></span>
                    <span style={{ float: 'right' }}><Link to={'/login'}>Logout</Link></span>

                </div>
            }

        &nbsp;

        </div>
    );
}

export default Appheader;