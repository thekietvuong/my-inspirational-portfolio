import React, {useState } from "react"
import {BsYoutube, BsGithub} from "react-icons/bs"
import {easeInOut, motion as m} from "framer-motion"
import "./project.scss"

export default function Project({img, title, title_des, img_descript, description, youtube, github}){

    const [isClick, setIsClick] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return(
        <div className="project" >
            <div className="background"
               onClick={()=>setIsClick(true)}
               onMouseEnter={()=>setIsHover(true)}
               onMouseLeave={()=>setIsHover(false)}
            >
                <img src={img}/>
                {isHover && 
                    <>
                        <m.div className="click-me-mate"
                            initial={{opacity: 0, y: 200}}
                            animate={{opacity: .3, y: 0}}
                            exit={{opacity: 0, y: 200}}
                            transition={{duration: .6, ease: easeInOut}}
                        ></m.div>
                        <m.p className="click-me"
                            initial={{opacity: 0, y: 200}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: .2, duration: .6, ease: easeInOut}}
                        >Click<br/>me</m.p>
                    </>
                }
            </div>
            <p className="title">{title.toUpperCase()}</p>
            {isClick &&
                    <div className="detail">
                        <div className="mate" onClick={()=>setIsClick(false)}></div>
                        <div className="project-card">
                            <button onClick={()=>setIsClick(false)}>close</button>
                            <p className="title-detail">
                                PROJECT DETAIL
                            </p>
                            <m.img src={img_descript}
                                initial={{opacity: 0, y: 200}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 200}}
                                transition={{duration: .6, ease: easeInOut}}
                            />
                            <m.h2
                                initial={{opacity: 0, y: 200}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 200}}
                                transition={{delay: .2, duration: .6, ease: easeInOut}}
                            >{title_des}</m.h2>
                            <m.div className="content"
                                initial={{opacity: 0, y: 200}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 200}}
                                transition={{delay: .4, duration: .6, ease: easeInOut}}
                            >
                                {description}
                                {youtube && <p>To see more about my project. Let's check out my Youtube video:</p>}
                                {youtube && youtube.map((item, index)=>(
                                    <a href={item.link} key={index} className="youtube-link">
                                        <p><BsYoutube className="icon"/> {item.title}</p>
                                    </a>
                                ))}
                                {github && <a className="github-link" href={github}><p><BsGithub className="github-icon"/> Check out the code on my Github </p></a>}
                            </m.div>
                        </div>
                    </div>
            }
        </div>
    );
}
