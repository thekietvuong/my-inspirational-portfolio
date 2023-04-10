import React, {useState } from "react"
import "./navbar.scss"
import Link from "react-scroll/modules/components/Link";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar(){
    const [isShowNav, setIsShowNav] = useState(false);
    return(
        <div className="navbar" style={{
            zIndex: `${isShowNav ? "10000" : "100"} `
        }}>
            <h1 className="intro">The Kiet Vuong</h1>
            <div className={`nav-menu ${isShowNav ? "responsive_nav" : ""}`}>
                <div className="nav-link">
                    <Link className="nav-item" to="home" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={0} duration={600}>HOME</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="about" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={0} duration={600}>ABOUT</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="project-content" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={-50} duration={600}>PROJECT</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="skill-page" spy={true} onClick={()=>setIsShowNav(false)} smooth={true} offset={-50} duration={600}>SKILL</Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-item" to="contact" onClick={()=>setIsShowNav(false)} spy={true} smooth={true} offset={-50} duration={600}>CONTACT</Link>
                </div>
                <button onClick={()=>setIsShowNav(false)} className="nav-btn nav-close-btn"><FaTimes/></button>
            </div>
            <button onClick={()=>setIsShowNav(true)} className="nav-btn"><FaBars/></button>
        </div>
    );
}