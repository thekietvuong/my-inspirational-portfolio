import React, {useEffect, useRef, useState} from "react"
import gsap from "gsap";
import "./header.scss"

export default function Header(){
    return(
        <section className="header-container">
           <ul className="header-menu">
               <li>Intro</li>
               <li>About</li>
               <li>Featured</li>
           </ul>
           <h1 id="header-text">Art Objects</h1>
        </section>
    );
}