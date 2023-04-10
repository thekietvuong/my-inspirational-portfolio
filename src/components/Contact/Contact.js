import React, { useEffect, useRef, useState } from "react"
import "./contact.scss"
import {BsYoutube, BsCheckCircleFill} from "react-icons/bs"
import emailjs from '@emailjs/browser';

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact(){
    const formRef = useRef(null);
    const successRef = useRef(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const youtubeRef = useRef(null);
    const RefArray = [h1Ref, pRef, youtubeRef];

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4y3rif7', 'template_rhx6iry', formRef.current, 'lrkxoAy4k-IxueFdQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setIsSuccess(true);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>setIsSuccess(false), 3000);
        return () => clearTimeout(timer);
    },[isSuccess])

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
        RefArray.map(item => gsapAnimation(item));
    },[])

    return(
        <div className="contact">
            <div className="left">
                    <div className="text-box">
                        <h1 className="text-box-h1" ref={h1Ref}>GET IN TOUCH!</h1>
                        <p className="text-box-p" ref={pRef}>
                            Thank you for your interest in my portfolio.<br/><br/>
                            Hope you like all of what I bring my unique value to your need. I look forward to the opportunity of working with you one day and I thank you for taking the time to browse through my CV and project.<br/><br/>
                            I currently live in Ho Chi Minh City, Vietnam.<br/><br/>
                            Please fill in the form below to get in touch. I can’t wait to get to know you!<br/><br/>
                            The Kiet Vuong<br/><br/>
                            0123 456 789
                        </p>
                        <div className="youtube" ref={youtubeRef}>
                            <h1 className="text-box-follow">FOLLOW ME ON YOUTUBE</h1>
                            <a href="https://www.youtube.com/channel/UCMHlhjLjBa-1txotColRXgw">
                                <BsYoutube className="text-box-icon" />
                            </a>
                            <h3 className="text-box-h3">@TK</h3>
                        </div>
                    </div>
            </div>
            <div className="right">
                <form ref={formRef} onSubmit={handleSubmit} className="form">
                    <label for="name">HEY THE KIET, MY NAME IS</label><br/>
                    <input type="text" name="name"/><br/>
                    <label for="email">MY EMAIL ADDRESS IS</label><br/>
                    <input type="text" name="email"/><br/>
                        <label for="message">MY MESSAGE TO YOU</label><br/>
                    <textarea type="text" name="message" rows="5"/><br/>
                    <label for="from">I HEARD ABOUT YOU FROM</label><br/>
                    <input type="text" name="from"/><br/>
                    <button>SEND MESSAGE</button>
                    <div className={`submit-successful ${isSuccess ? "show" : ""}`} ref={successRef}>
                        <BsCheckCircleFill className="icon"/>
                        <p>Your message has been sent completely.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;