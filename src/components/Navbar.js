import React from 'react'
import {
    Link
} from "react-router-dom";


const Navbar = (props) => {


    let { heading } = props;

    return (
        <div>
            <>
                <div>
                    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
                        <div className="container-fluid">
                            <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{heading}</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                                    <li className="nav-item ">
                                        <Link className="nav-link" style={{ color: props.mode === 'light' ? 'black' : 'white' }} aria-current="page" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/buisness">Buisness</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/sports">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/entertainment">Entertaiment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/technology">Technology</Link>
                                    </li>
                                </ul>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.modeDark} id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor={"flexSwitchCheckDefault"}>{props.enable}</label>
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
