import React, { useEffect, useState } from "react";
import {BsArrowUpCircleFill} from "react-icons/bs"
import "./backToTop.scss"
import Link from "react-scroll/modules/components/Link";

const BackToTop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 200){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        })
    },[])


    return(
        <div className="back-to-top">
            {backToTopButton && 
                <Link 
                    className="button"
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={600}
                >
                    <BsArrowUpCircleFill className="icon"/>
                </Link>
            }
        </div>
    );
}

export default BackToTop;