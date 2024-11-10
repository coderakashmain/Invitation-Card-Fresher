import React, {  useRef } from 'react'
import './Video.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavLink, Outlet, useLocation } from 'react-router-dom';




const Video = () => {
    const videoRef = useRef();
    const location = useLocation();
   
        useGSAP(()=>{
                gsap.to(videoRef.current,{
                    // left : 0,
                    scale : 1,
                    translateY : 0,
                    duration : 0.5,

                })
        })
  return (
    <aside >
        <div className='aside' ref={videoRef}>

        <div className="video-title" >
        <NavLink to= '/video'> <h2 className={`${location.pathname === '/video' ? 'invition' : '' }`}>Invitation Video </h2></NavLink> 
        <NavLink to= '/video/PYVideo'>   <h2 className={`${location.pathname === '/video/PYVideo' ? 'previous' : '' }`}>Previous Party's Video  </h2></NavLink>
        </div>
        <hr />
        <div className="video-box">
          <Outlet/>
        </div>
        </div>
    </aside>
  )
}

export default Video
