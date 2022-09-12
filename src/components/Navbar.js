import React from 'react'
import {
    Link
  } from "react-router-dom";
  

const Navbar =(props)=> {

    
        let { heading } = props;

        return (
            <div>
                <>
                    <div>
                        <nav className={`navbar navbar-expand-lg navbar bg-light`}>
                            <div className="container-fluid">

                                <Link className="navbar-brand" to="/">{heading}</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/buisness">Buisness</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/science">Science</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/sports">Sports</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/entertainment">Entertaiment</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/health">Health</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/technology">Technology</Link>
                                        </li>
                                    </ul>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                            <label className="form-check-label" htmlFor={"flexSwitchCheckDefault"}>Default switch checkbox input</label>
                                    </div>

                                </div>
                            </div>
                        </nav>
                    </div >
                </>
            </div>
        )
    
}
export default Navbar
