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
            <h2 className={`${location.pathname === '/video' ? 'invition' : '' }`}><NavLink to= '/video'>Invitation Video</NavLink>  </h2>
            <h2 className={`${location.pathname === '/video/PYVideo' ? 'previous' : '' }`}><NavLink to= '/video/PYVideo'>Previous Party's Video</NavLink>  </h2>
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
