import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/js/scripts';
import '../assets/js/datatables-simple-demo';
// import '../assets/demo/chart-area-demo';
import '../assets/demo/chart-bar-demo';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faColumns, faBookOpen } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <div>
        <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <a className="nav-link" href="Accueil_back">
                                <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faCoffee} />
                                </div>
                                Home
                                </a>
                                <Link to="/Accueil_back" className="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseGame" aria-expanded="false" aria-controls="collapseGame">
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon={faColumns} />
                                    </div>
                                    liste Game
                                    <div className="sb-sidenav-collapse-arrow"></div>
                                </Link>
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                        <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                    </nav>
                                </div>

                                <Link to="/create" className="nav-link collapsed"  data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={faBookOpen} />
                                    </div>
                                    Participants Hackaton
                                    <div className="sb-sidenav-collapse-arrow">
                                    </div>
                                </Link>

                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Participants Stand
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>

                                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                    Reservation VIP
                                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>


                                {/* <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Authentication
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="login.html">Login</a>
                                                <a className="nav-link" href="register.html">Register</a>
                                                <a className="nav-link" href="password.html">Forgot Password</a>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Error
                                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <a className="nav-link" href="401.html">401 Page</a>
                                                <a className="nav-link" href="404.html">404 Page</a>
                                                <a className="nav-link" href="500.html">500 Page</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div> */}
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <a className="nav-link" href="charts.html">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                        Statistiques
                                </a>
                                <a className="nav-link" href="tables.html">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                    Documents
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
    </div>
  )
}

export default NavBar