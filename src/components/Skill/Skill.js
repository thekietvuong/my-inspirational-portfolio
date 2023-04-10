import React, { useEffect, useRef } from "react"
import "./skill.scss"

import LineArt from "../../img/line art.png";
import {SiAdobeillustrator, SiAdobephotoshop} from "react-icons/si"
import {BsBrushFill} from "react-icons/bs"
import {DiHtml5, DiCss3, DiJavascript, DiReact} from "react-icons/di"
import {GiPuzzle} from "react-icons/gi"

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const technicallSkill = [
    {
        icon: <DiHtml5/>,
        name: "HTML",
        level: 4,
    },
    {
        icon: <DiCss3/>,
        name: "CSS / SCSS",
        level: 3,
    },
    {
        icon: <DiJavascript/>,
        name: "Javascript",
        level: 4,
    },
    {
        icon: <DiReact/>,
        name: "React",
        level: 5,
    },
]

const softSkill = [
    {
        icon: <SiAdobeillustrator/>,
        name: "Adobe Illustrator",
        level: 5,
    },
    {
        icon: <SiAdobephotoshop/>,
        name: "Photoshop",
        level: 3,
    },
    {
        icon: <BsBrushFill/>,
        name: "UI design",
        level: 4,
    },
    {
        icon: <GiPuzzle/>,
        name: "Critical thinking",
        level: 5,
    },
]

export default function Skill(){

    const h1Ref = useRef(null);
    const skillIntroRef = useRef(null);
    const skillBoxRef = useRef(null);
    const lineArtRef = useRef(null);

    const refEle = [h1Ref, skillIntroRef, skillBoxRef, lineArtRef]

    const gsapAnimation = (ref) => {
        gsap.fromTo(ref.current, 
            {
                y: "10rem",
            }, 
            {y: "0rem", duration: 1, scrollTrigger:{
                trigger: ref.current,
                toggleActions: 'restart none restart none',
                start: `-600px center`,
                end: `top center`,
                scrub: 2,
                markers: false,
            }})
    }

    useEffect(()=>{
        refEle.map(item => {
            gsapAnimation(item);
        })

    },[])

    return(
        <div className="skill-page">
            <h1 ref={h1Ref}>MY SKILL</h1>
            
            <div className="skill-intro" ref={skillIntroRef}>
                <p><span>"</span> Almost my skills, I learn by myself. <br/>Let me tell you what I can do</p>
                <div className="code-box">
                    <pre>
                        1   const myTechnicalSkill = [ HTML, CSS, Javascript, React];<br/>
                        2   const mySoftSkill = [Adobe Illustrator,<br/>                        Adobe Photoshop, UI Design];<br/>
                        3   console.log(mySkill: [...myTechnicalSkill, ...mySoftSkill]);
                    </pre>
                    <div className="typing"><span className="pointer">|</span></div>
                </div>
            </div>

            <div className="skill-box" ref={skillBoxRef}>
                <div className="left">
                    <h2>TECHNICAL SKILL</h2>
                    <div className="skill-dex">
                        {
                            technicallSkill.map((item, index) => (
                                <div className="skill" key={index}>
                                    <div className="icon">{item.icon}</div>
                                    <div className="skill-info">
                                        <h3>{item.name}</h3>
                                        <div className="exp-bar">
                                            <div className="exp" style={{left: `${-10 - (5 - item.level)*20 }%`}}/>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <h2>SOFT SKILL</h2>
                    <div className="skill-dex">
                        {
                            softSkill.map((item, index) => (
                                <div className="skill" key={index}>
                                    <div className="icon">{item.icon}</div>
                                    <div className="skill-info">
                                        <h3>{item.name}</h3>
                                        <div className="exp-bar">
                                            <div className="exp" style={{left: `${-10 - (5 - item.level)*20 }%`}}/>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
           
            <img src={LineArt} className="line-art" ref={lineArtRef}/>
        </div>
    );
}