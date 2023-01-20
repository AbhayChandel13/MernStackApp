import React from "react";
import { useNavigate,NavLink } from "react-router-dom";


const Error = () => {
  const history = useNavigate();

  return (
    <>
      {/* <div className="container">
        <div className="error d-flex flex-column justify-content-lg-center align-items-center">
          //<img src="./404.png" alt="error" className='errorimg' />
          <h4 className="mt-10">404 Error ! Page Not Found 😭</h4>
          <button className="btn btn-primary mt-10" onClick={() => history("/")}>
            Redirect Login Page
          </button>
        </div>
      </div> */}

<div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <img className="mb-4 img-error" src="assets/img/error-404-monochrome.svg" />
                                    <p className="lead">This requested URL was not found on this server.</p>
                                    <NavLink to="/dashboard">
                                        <i className="fas fa-arrow-left me-1"></i>
                                        Return to Dashboard
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutError_footer">
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
  );
};

export default Error;
