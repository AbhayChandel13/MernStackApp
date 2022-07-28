import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
// import logo from "../../images/logo.png";
// import Dashboard from '../Dashboard';

const Header = () => {

    //const [show, setShow] = useState(false);
    const { state, dispatch } = useContext(UserContext);
    let navigate = useNavigate();

    const handleclick = () => {
        console.log("Clicked");
        //    if(window.confirm("Are You Sure, You want to Logout?")){

        //      navigate("/login",{ replace: true });        

        //    }
        //    else{
        //     navigate = ("/login", { replace:false });
        //    }
    }
    // const  handleclicknouser=()=>{
    //     console.log("No User Clicked");
    //     window.confirm("You didn't logged in ");
    // }

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                        {/* <!-- Navbar Brand--> */}
                        <a className="navbar-brand ps-3" href="#">Wowz United </a>
                        {/* <!-- Sidebar Toggle--> */}
                        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
                        {/* <!-- Navbar Search--> */}
                        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                            </div>
                        </form>
                        {/* -- Navbar-- */}
                        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                            <NavLink className="btn btn-primary btn-block" to="/logout" onClick={handleclick}>Logout</NavLink>
                            {/* <li><button className="btn btn-primary" type="button" onClick={handleclick}>Logout</button></li> */}
                            {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li> */}
                        </ul>
                    </nav>
                </>
            )
        } else {
            return (
                <>
                    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                        {/* <!-- Navbar Brand--> */}
                        <a className="navbar-brand ps-3" href="#">Wowz United </a>
                        {/* <!-- Sidebar Toggle--> */}
                        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                        {/* <!-- Navbar Search--> */}
                        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                            </div>
                        </form>
                        {/* -- Navbar-- */}
                        {/* <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <NavLink className="btn btn-primary btn-block" to="" onClick={handleclicknouser}>Logout</NavLink> 
           
            </ul> */}
                    </nav>
                </>

            )
        }
    }

    return (
        <>
            <RenderMenu />

        </>
    )
}

export default Header
