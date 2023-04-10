import React, { useEffect, useRef } from "react"
import "./projects.scss"
import Project from "./Project.js";

import Project1 from "../../img/Project 1.png"
import Project2 from "../../img/Project 2.png"
import Project3 from "../../img/Project 3.png"
import ImgDes1 from "../../img/imgDes1.png"
import ImgDes2 from "../../img/imgDes2.png"
import ImgDes3 from "../../img/imgDes3.png"
import logo from "../../img/logo.png"

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const projectArr = [
    {
        img: Project1,
        title: "Kat game",
        img_descript: ImgDes1,
        title_des: "Control character in 2D game.",
        description: <p>In this project, I use my advantage skill to design my own character. It’s inspired by the game Hollow Knight. Then I create a sprite sheet with run, attack, jump, and dash actions. Finally, make animation by using Javascript.
                        <br/><br/>
                        Thanks to the powerful HTML Canvas Graphic Method that makes it is easy for me to render each frame correctly. With the retention of the image in the human eye, if I render each frame of an action in a short time, I can create the feeling that the character is moving. Similar to the old-generation 2D games.
                        <br/><br/>
                        In addition to managing a large number of character properties, I have to use "Object" and its methods. This project helped me understand a lot more about Object Oriented.
                        <br/><br/>
                        Note: All of these things, I learned from the Franks Laboratory.</p>,
        youtube: [
            { 
                link: "https://www.youtube.com/watch?v=aGnUiF1DrjM",
                title: "Simple 2D Character design | Adobe illustrator CC (Javascript Game Ep.1)",
            },
            { 
                link: "https://www.youtube.com/watch?v=6sHTVf0XG70",
                title: "How to Animate and Make a Sprite Sheet for Your Character (Javascript Game Ep.2)",
            },
            { 
                link: "https://www.youtube.com/watch?v=krNollwfqN0&t=1s",
                title: "Sprite Animation in JavaScript - JavaScript Tutorial with HTML Canvas (Javascript Game Ep.3)",
            },
            { 
                link: "https://www.youtube.com/watch?v=YczRHardTJI&t=735s",
                title: "Keyboard Input to Control Your Character (Javascript Game Ep.5)",
            }],
        github: "https://github.com/thekietvuong/Sprite-Animation-in-JavaScript"
    },
    {
        img: Project2,
        title: "Fox website",
        img_descript: ImgDes2,
        title_des: "The RedFox website",
        description: <p>This project is a website about red foxes that includes interesting information about their characteristics, habitat, food, and reproduction,...
                        <br/><br/>
                        Talking about the technical aspects, this is a simple website consisting of just a navbar with an animation that spans out when the user hovers over it. Along with eye-catching page transition effects.
                        <br/><br/>
                        To do that, I had to combine React Router Dom and Framer motion.
                        <br/><br/>
                        Let's click on my Youtube video links below to find out in detail how I designed the logo, and how I coded the website from scratch.
                    </p>,       
        youtube: [
            {
                link: "https://www.youtube.com/watch?v=F_xauCFSMUw&t=767s",
                title: "Animated Responsive Navbar (Part 1) - React & CSS Animation Tutorial for Beginners", 
            },
            {
                link: "https://www.youtube.com/watch?v=jUg-L4ZtqwI&t=1538s",
                title: "Page Transitions In React (Part 2) - React Router V6 and Framer Motion Tutorial", 
            }],
        github: "https://github.com/thekietvuong/The-Red-Fox-Information-Website"
    },
    {
        img: Project3,
        title: "Pokemon API",
        img_descript: ImgDes3,
        title_des: "POKEMON API",
        description: <p>This project is a front-end developer test of the MOCK interview. Fetching Pokemon API with React as a framework. Once again, I took advantage of my graphic design to create a simple yet interesting UI.
                        <br/><br/>
                        This project gives me the opportunity to work with fetching data, array method, filtering, and finding the corresponding pokemon when the user types in the search bar.
                        <br/><br/>
                        It will be interesting and I'm sure you don't want to miss my video below. Let's check it out
                    </p>,
    },
]

export default function Pojects(){

    const imgRef = useRef(null);
    const textH1Ref = useRef(null);
    const infoRef = useRef(null);
    const projRef = useRef(null);

    const gsapAnimation = (ref, deg) => {
        gsap.fromTo(ref.current, 
            {
                y: "10rem",
                opacity: 0.5,
                rotate: `${deg}deg`
            }, 
            {y: "0rem", opacity: 1, rotate: "0deg", duration: 1, scrollTrigger:{
                trigger: ref.current,
                toggleActions: 'restart none restart none',
                start: `-600px center`,
                end: `top center`,
                scrub: 2,
                markers: false,
            }})
    }

    useEffect(()=>{
        gsapAnimation(imgRef, -90);
        gsapAnimation(textH1Ref, 0);
        gsapAnimation(infoRef, 0);
    },[])

    return(
        <div className="project-content">
            <div className="intro">
                <img src={logo} className="logo" ref={imgRef} />
                <div className="text">
                    <h1 ref={textH1Ref}>MY PROJECT</h1>
                    <p ref={infoRef}>
                        <span>Hi,</span><br/>
                        Welcome to The Kiet's project.<br/>
                        Almost my projects tend to be simple, with minimal design & typography. 
                        You can click on my project for more details
                    </p>
                </div>
            </div>
            <div className="projects" ref={projRef}>
                {projectArr.map((item, index)=>(
                    <Project 
                        key={index} 
                        img={item.img} 
                        title={item.title}
                        title_des = {item.title_des}
                        description={item.description}
                        img_descript={item.img_descript}
                        youtube = {item.youtube}
                        github = {item.github}
                        className="project"
                    />
                ))}
            </div>
        </div>
    );
}