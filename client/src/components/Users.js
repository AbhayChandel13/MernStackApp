import React, { useState, useEffect, useContext } from 'react';
import Header from './header/Header'
import { NavLink, useNavigate } from 'react-router-dom';
import { Row, Container, Col, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { UserContext } from '../App';


const Users = () => {
    let [searchQuery, setSearchQuery] = useState("");
    let [usersdata, setUserdata] = useState([]);
    const { state, dispatch } = useContext(UserContext);

    const getUsers = async (e) => {

        try {

            const res = await fetch('/users', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserdata(data);
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        // const data = window.localStorage.getItem('MY_APP_STATE');       
        // if ( data !== null ) state(JSON.parse(data));
        dispatch({ type: "USER", payload: true })
    }, []);

    if (searchQuery) {
        usersdata = usersdata.filter(
            (m) =>
                m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
    }

    return (
        <>
            <Header />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav" >
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <NavLink className="nav-link" to="/dashboard">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </NavLink>
                                <div className="sb-sidenav-menu-heading">Interface</div>

                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Pages
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <NavLink className="nav-link " to="/about"> About </NavLink>
                                    <NavLink className="nav-link " to="/contact"> Contact </NavLink>
                                    <NavLink className="nav-link " to="/users"> Users </NavLink>

                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <a className="nav-link" href="#">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                    Charts
                                </a>
                                <a className="nav-link" href="#">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Tables
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Wowz United
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            {/* <h1 className="mt-4">Dashboard</h1> */}
                            {/* <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol> */}
                            <div className="card mb-4 mt-4">
                                <div className="card-header">
                                    {/* <div className="fas fa-table me-1">
                                DataTable Example
                            </div> */}
                                    <div className="card-body">
                                        <Table  hover variant="light-grey">
                                            <thead>
                                                <tr>
                                                    <th colSpan="12" className="text-left">


                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                placeholder={"Search by Name"}
                                                                value={searchQuery}
                                                                onChange={(e) =>
                                                                    setSearchQuery(e.target.value)
                                                                }
                                                            />

                                                            <div className="input-group-append ">
                                                                <button
                                                                    className="input-group-text"
                                                                    style={{ height: "47px" }}
                                                                >
                                                                    <FaSearch />
                                                                </button>
                                                            </div>


                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Work</th>
                                                </tr>
                                            </thead>
                                            {usersdata.map((usersdata, i) => (
                                                <tbody key={usersdata._id}>
                                                    <tr>
                                                        <td>{usersdata.name}</td>
                                                        <td>{usersdata.email}</td>
                                                        <td>{usersdata.phone}</td>
                                                        <td>{usersdata.work}</td>
                                                    </tr>

                                                </tbody>
                                            ))}
                                            {/* </table> */}
                                        </Table>

                                        {/* <table id="datatablesSimple1">
                                        <thead>
                                                <tr>
                                                    <th>User_Id</th> 
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Work</th>

                                                </tr>
                                            </thead>
                                            {usersdata.map((usersdata, i) => (
                                                <tbody key={usersdata._id}>
                                                    <tr>
                                                       <td>{usersdata._id}</td> 
                                                        <td>{usersdata.name}</td>
                                                        <td>{usersdata.email}</td>
                                                        <td>{usersdata.phone}</td>
                                                        <td>{usersdata.work}</td>

                                                    </tr>

                                                </tbody>
                                            ))}
                                        </table>  */}
                                    </div>
                                </div>
                            </div>




                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2022</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>


            </div>

        </>
    )
}

export default Users;