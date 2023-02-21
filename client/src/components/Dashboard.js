import React, { useState, useEffect, useContext } from "react";
import Header from "./header/Header";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

      // if(!res.status===200){
      //     const error = new Error(res.error)
      //     throw error;
      // }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userHomePage();
  }, []);

  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");

    // if (data !== null) state(JSON.parse(data));
    dispatch({ type: "USER", payload: true });
  }, []);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <nav
                className="sb-sidenav accordion sb-sidenav-dark"
                id="sidenavAccordion"
              >
                <div className="sb-sidenav-menu">
                  <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <a className="nav-link" href="#">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      Dashboard
                    </a>
                    <div className="sb-sidenav-menu-heading">Interface</div>

                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePages"
                      aria-expanded="false"
                      aria-controls="collapsePages"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      Pages
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapsePages"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#sidenavAccordion"
                    >
                      <NavLink className="nav-link " to="/about">
                        {" "}
                        About{" "}
                      </NavLink>
                      <NavLink className="nav-link " to="/contact">
                        {" "}
                        Contact{" "}
                      </NavLink>
                      <NavLink className="nav-link " to="/users">
                        {" "}
                        Users{" "}
                      </NavLink>
                    </div>
                    <div className="sb-sidenav-menu-heading">Addons</div>
                    <a className="nav-link" href="#">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-chart-area"></i>
                      </div>
                      Charts
                    </a>
                    <a className="nav-link" href="#">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-table"></i>
                      </div>
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
                  <h1 className="mt-4">Dashboard</h1>
                  <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Welcome</li>
                  </ol>

                  <h1> {userName} </h1>
                  <h2>
                    {show
                      ? "Happy to See You Back"
                      : "We are the Mern Developer"}{" "}
                  </h2>
                </div>
              </main>
              <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                  <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">
                      Copyright &copy; Your Website 2022
                    </div>
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
      );
    } else {
      return (
        <>
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <nav
                className="sb-sidenav accordion sb-sidenav-dark"
                id="sidenavAccordion"
              >
                <div className="sb-sidenav-menu">
                  <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <a className="nav-link" href="#">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      Dashboard
                    </a>
                    <div className="sb-sidenav-menu-heading">Interface</div>

                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePages"
                      aria-expanded="false"
                      aria-controls="collapsePages"
                    >
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      Pages
                      <div className="sb-sidenav-collapse-arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      className="collapse"
                      id="collapsePages"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#sidenavAccordion"
                    >
                      {/* <NavLink className="nav-link " to="/about"> About </NavLink>
                                            <NavLink className="nav-link " to="/contact"> Contact </NavLink> */}
                      <NavLink className="nav-link " to="/login">
                        {" "}
                        Login{" "}
                      </NavLink>
                      <NavLink className="nav-link " to="/">
                        {" "}
                        Registration{" "}
                      </NavLink>
                    </div>
                    <div className="sb-sidenav-menu-heading">Addons</div>
                    <a className="nav-link" href="#">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-chart-area"></i>
                      </div>
                      Charts
                    </a>
                    <a className="nav-link" href="#">
                      <div className="sb-nav-link-icon">
                        <i className="fas fa-table"></i>
                      </div>
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
                  <h1 className="mt-4">Dashboard</h1>
                  <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Welcome</li>
                  </ol>

                  <h1> {userName} </h1>
                  <h2>
                    {show
                      ? "Happy to See You Back"
                      : "We are the Mern Developer"}{" "}
                  </h2>
                </div>
              </main>
              <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                  <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">
                      Copyright &copy; Your Website 2022
                    </div>
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
      );
    }
  };
  return (
    <>
      <Header />
      <RenderMenu />
    </>
  );
};

export default Dashboard;
