import React from 'react'
import Header from './header/Header'
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Header />  
      <div id="layoutSidenav">
            <div id="layoutSidenav_nav" >
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="#">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Interface</div>                          
                            
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <NavLink className="nav-link " to="/about"> About </NavLink>
                                
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
                 <h1 className="mt-4">Dashboard</h1>
                 <ol className="breadcrumb mb-4">
                     <li className="breadcrumb-item active">Dashboard</li>
                 </ol>
                
                 <p> MERN STACK </p>
                   <h1> Hello Welcome To the DashBoard Page  </h1>
                
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

export default Dashboard


       