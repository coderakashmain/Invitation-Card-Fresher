import React, { useEffect,useRef,useState } from 'react'
import "./Home.css"
import {  useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Home = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [update,setUpdate] = useState(false);

   
    const navigation =()=>{
        navigate('video');
    }
    useEffect(() => {
        // Check if a name is already saved in sessionStorage
        let storedName = sessionStorage.getItem('username');
        
        if (!storedName) {
            // If no name is saved, prompt the user
            while (!storedName) {
                storedName = prompt('Enter your name, dear?');
                
            }
            // Save the name to sessionStorage
            sessionStorage.setItem('username', storedName);
            setUpdate(true);
        }

        // Set the name in state
        setName(storedName);
    }, []);

    useGSAP(()=>{
        const animationPlayed = localStorage.getItem('animationPlayed');
        if (animationPlayed) {


      

        const opentl = gsap.timeline();
        opentl
        .from('.word1',{
            x : -300,
            duration : 0.5,
            opacity :0
        })
        .to('.word1', { x: 300, duration: 0.2, autoAlpha: 0 })
        .from('.word2',{
            y : 300,
            duration : 0.5,
            opacity :0
        })
        .to('.word2', { y: -300, duration: 0.2, autoAlpha: 0 })
        .from('.word3',{
            top : -300,
            duration : 0.5,
            opacity :0
        })
        .to('.word3', { opacity : 0, duration: 0.7, autoAlpha: 0 })

        .from('.word4',{
            bottom : -300,
            duration : 0.5,
            opacity :0
        })
        .from('.word5',{
            x : -300,
            duration : 0.5,
            opacity :0
        })
        .from('.word6',{
            y: 300,
            duration : 0.5,
            opacity :0
        })
        .to('.word4', { y: 200,opacity : 0, duration: 0.8, autoAlpha: 0 },'same')
        .to('.word5', { y: 200,opacity : 0, duration: 0.8, autoAlpha: 0 },'same')
        .to('.word6', { y: 200,opacity : 0, duration: 0.4, autoAlpha: 0 },'same')
        .from('.word7',{
            top : -300,
            duration : 0.5,
            opacity :0
        })
        .from('.word8',{
            bottom : -300,
            duration : 0.5,
            opacity :0
        })
        .from('.word9',{
            x : -300,
            duration : 0.5,
            opacity :0
        },'all1')
        .to('.light3' ,{left : '100%',ease: "power4.inout", duration : 1},'all1')
        .to('.light4' ,{right:'100%',ease: "power4.inout", duration : 1},'all1')

        .to('.word7', { top: 300, duration: 0.2, autoAlpha: 0 })
        .to('.word8', { bottom: 300, duration: 0.2, autoAlpha: 0 })
        .to('.word9', { x: 300, duration: 0.2, autoAlpha: 0 })
        .from('.word10',{
            y : -300,
            duration : 0.5,
            opacity :0
        },'all')
        .to('.light1' ,{top : '-100%',ease: "power4.inout", duration : 0.5},'all')
        .to('.light2' ,{top :'100%',ease: "power4.inout", duration : 0.5},'all')
        .to('.word10', { y: 300, duration: 0.2, autoAlpha: 0 })
        .from('.word11',{
            y : 300,
            duration : 0.5,
            opacity :0
        })
        .to('.word11', { x: -300, duration: 0.4, autoAlpha: 0 })
        .from('.word12',{
            y : 300,
            duration : 0.5,
            opacity :0
        })
        .to('.word12', { y: -300, duration: 0.2, autoAlpha: 0 })
        .from('.word13',{
            y : -300,
            duration : 0.5,
            opacity :0
        })
        .to('.word13', { y: 300, duration: 0.2, autoAlpha: 0 })
        .from('.word14',{
            x : -300,
            duration : 0.5,
            opacity :0
        })
        
        
        
        
        
        .from('.word16',{
            y : 300,
            duration : 0.5,
            opacity :0
        })
        .from('.word17',{
            y : -300,
            duration : 0.5,
            opacity :0
        })
        .from('.word18',{
            x : -300,
            duration : 0.5,
            opacity :0
        })
        .to('.word17', { x: 300, duration: 0.2, autoAlpha: 0 })
        .to('.word16', { y: -300, duration: 0.2, autoAlpha: 0 })
        .to('.word18', { x: 300, duration: 0.2, autoAlpha: 0 })
        .to('.word14', { x: 300, duration: 0.2, autoAlpha: 0 })
        
        .to('.loading', {display : 'none',borderRadius : 50, duration: 0.5, autoAlpha: 0 })
       
        
        localStorage.setItem('animationPlayed', 'true');

        opentl.from('.boxIn b',{
            x : -100,
            opacity : 0,
            duration : 0.3,
        })
        .from('.boxIn h1',{
            x : -200,
            opacity : 0 ,
            duration : 0.2
        })
        .from('.boxIn h2',{
            x : 200,
            opacity : 0 ,
            duration : 0.2
        })
        .from('.boxIn h3',{
            x : -200,
            opacity : 0 ,
            duration : 0.2
        })
        .from('.boxIn h4',{
            x : 200,
            opacity : 0 ,
            duration : 0.2
        })
        .from('.boxIn p',{
            x : -200,
            opacity : 0 ,
            duration : 0.2
        })
        .from('.boxIn button',{
            x : 200,
            opacity : 0 ,
            duration : 0.2
        })
       
    }
    else{
        gsap.to('.loading', { display :'none',borderRadius : 50, duration: 0.00001, autoAlpha: 0 })
    }
 

    });
    
    return (
        <header style={{overflow : 'hidden'}}>
            <div className="loading">
                <div className="loading-box">
                <h1 className='word1'>Welcome</h1>

                </div>

                <div className="loading-box">
                    
                <h1 className='word2'>Dear</h1>
                </div>

                <div className="loading-box">
                <h1 className='word3'>{name}</h1>
                    
                </div>

                <div className="loading-box">
                <h1 className='word4'>Are</h1>
                    
                </div>

                <div className="loading-box">
                    
                <h1 className='word5'>You</h1>
                </div>

                <div className="loading-box">
                    
                <h1 className='word6'>Excited</h1>
                </div>

                <div className="loading-box">
                <h1 className='word7'>to</h1>
                    
                </div>

                <div className="loading-box">
                <h1 className='word8'>Enjoy</h1>
                    
                </div>

                <div className="loading-box">
                <h1 className='word9'>The Grand</h1>
                    
                </div>

                <div className="loading-box">
                <h1 className='word10'>Frehser's</h1>
                    
                </div>

                <div className="loading-box">
                    
                <h1 className='word11'>Party.</h1>
                </div>

                <div className="loading-box">
                <h1 className='word12'>So Don't</h1>
                    
                </div>


                <div className="loading-box">
                    
                <h1 className='word13'>Forgate </h1>
                </div>

                <div className="loading-box">
                <h1 className='word14'>To</h1>
                    
                </div>

                <div className="loading-box">
                    
                <h1 className='word16'>Join</h1>
                </div>

                <div className="loading-box">
                <h1 className='word17'>With</h1>
                    
                </div>

                <div className="loading-box">
                <h1 className='word18'>Us!</h1>
                    
                </div>
                 <div className="light1 light"></div>
                <div className="light2 light"></div> 
                {/* <div className="light3 light"></div>
                <div className="light4 light"></div> */}
            </div>
            <div className="backTheme">
                <div className="line1 line"></div>
                <div className="line2 line"></div>
                <div className="line3 line"></div>
                <div className="line4 line"></div>
                <div className="line5 "></div>
            </div>
            <div className="front">
                <div className="box">
                    <div className="boxIn">
                        <b>@COMPUTER SCIENCE DEPARTEMT</b>

                        <h1>Fresh Code <br /> Fiesta</h1>
                        <h2> <p>You are Invited!</p>Attend The Fresher's Party with us.</h2>

                        <h3>Place : Computer Science Department</h3>
                        <h4>Date : 13-11-2024</h4>
                        <p>Coding aur coffee, yahi hai hamara style,
                        Fresher's Party mein aaiye, banaye kuch yaadon ka file!</p>
                        <button onClick= {navigation}>videos</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home
