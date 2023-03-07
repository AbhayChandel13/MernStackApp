import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    let res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      //window.alert("Invalid Registration");
      toast.error(" Invalid Registration Data", {
        position: "top-center",
      });
      console.log("Invalid Registration Data");
    } else {
      //window.alert("Registration Successfull");
      toast.success("Registration Successfully!", {
        position: "top-center",
      });
      //window.alert("Registration Successful");
      console.log("Registration Successful");

      // history.push("/login");
      navigate("/login", { replace: true });
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Create Account
                      </h3>
                    </div>
                    <div className="card-body">
                      <form method="POST">
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                name="name"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                              />
                              <label htmlFor="inputFirstName">
                                {" "}
                                Your Name{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                name="phone"
                                id="phone"
                                type="text"
                                placeholder="Enter your last name"
                                autoComplete="off"
                                value={user.phone}
                                onChange={handleInputs}
                              />
                              <label htmlFor="inputLastName">Phone</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            name="email"
                            id="inputEmail"
                            type="email"
                            placeholder="enter email"
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInputs}
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            name="work"
                            id="work"
                            type="text"
                            placeholder="enter your profession"
                            value={user.work}
                            onChange={handleInputs}
                          />
                          <label htmlFor="inputwork">Profession</label>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputPassword"
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                value={user.password}
                                onChange={handleInputs}
                              />
                              <label htmlFor="inputPassword">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                placeholder="Confirm password"
                                value={user.cpassword}
                                onChange={handleInputs}
                              />
                              <label htmlFor="cpassword">
                                Confirm Password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <NavLink
                              className="btn btn-primary btn-block"
                              to="/"
                              name="signup"
                              id="signup"
                              value="register"
                              onClick={PostData}
                            >
                              Create Account
                            </NavLink>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        {" "}
                        <NavLink className="nav-link " to="/login">
                          Login Have an account? Go to login{" "}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
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
};

export default Signup;
