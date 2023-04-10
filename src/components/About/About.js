import React, {useRef, useEffect} from "react"
import "./about.scss"
import Profile2 from "../../img/profile22.png"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About(){

    const imgRef = useRef(null);
    const paraRef = useRef(null);
    const infoRef = useRef(null);

    const AnimateObject = [imgRef, paraRef, infoRef];

    useEffect(()=>{

        const gsapAnimation = (ref) => {
            gsap.fromTo(ref.current, 
                {
                    y: "10rem",
                    opacity: 0.5,
                }, 
                {y: "0rem", opacity: 1, duration: 1, scrollTrigger:{
                    trigger: ref.current,
                    toggleActions: 'restart none restart none',
                    start: `-600px center`,
                    end: `top center`,
                    scrub: 2,
                    markers: false,
                }})
        }

        AnimateObject.map(item => {
            gsapAnimation(item);
        })
    },[])

    return(
        <div className="about">
            <div className="content">
                <img src={Profile2} ref={imgRef}></img>
                <p className="paragraph" ref={paraRef}>
                    Hello everyone, my name is Kiet, who is passionate about coding and UI design. Let's talk about my background. I'm a self-taught developer who started learning front-end skills and coding for several projects in a year.
                    <br/>
                    <br/>
                    During that time, I published a lot of projects on my Youtube channel. And got a lot of good feedback from my audience. That motivated me a lot. I found my passion through each project and want to create even more amazing ones. That keeps me always learning to improve my skills.
                    <br/>
                    <br/>
                    You can see more about my projects and skills below.
                    <br/>
                    <br/>
                </p>
                <div className="info" ref={infoRef}>
                    <p className="name">THE KIET VUONG</p>
                    <p>0123 456 789</p>
                    <p>vvvvvvvvv@gmail.com</p>
                    <p>Ho Chi Minh City, Viet Nam</p>
                </div>
            </div>
        </div>
    );
}

export default About;