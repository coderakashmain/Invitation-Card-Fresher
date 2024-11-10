import React, { useEffect, useRef, useState } from 'react'
import './Previous.css'
import video1 from '../VideosPhotoes/PreviousParty.mp4'
import icon from '../VideosPhotoes/lottieflow-play-05-000000-easey.json'
import Lottie from 'lottie-react'
import dance from '../VideosPhotoes/Dancemp4.mp4'
import photo1 from '../VideosPhotoes/photo1.jpg'
import photo2 from '../VideosPhotoes/photo2.jpg'
import photo3 from '../VideosPhotoes/photo3.jpg'
import photo4 from '../VideosPhotoes/photo4.jpg'




const Previous = () => {

  const  videoRef = useRef([]);
  const  photoRef = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const InvitaionVideo = [
    video1,
    dance,
    
  ];
  const InvitaionPhoto = [
    photo1,
    photo2,
    photo3,
    photo4,
    
  ];

  const handleVideoClick = (index) => {

    videoRef.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });


    const video = videoRef.current[index];

    if (video) {
      video.play();
      setActiveVideoIndex(index);
     
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE11
        video.msRequestFullscreen();
      }
    }
  };

  const open =(index)=>{
    const photo = photoRef.current[index];
    if(photo){
      photo.requestFullscreen();
      } else if (photo.webkitRequestFullscreen) { // Safari
        photo.webkitRequestFullscreen();
      } else if (photo.msRequestFullscreen) { // IE11
        photo.msRequestFullscreen();
      }
    };
  

  const handleFullscreenChange = () => {
    if (document.fullscreenElement === null && activeVideoIndex !== null) {
      const video = videoRef.current[activeVideoIndex];
      if (video) {
        video.pause();
      }
      setActiveVideoIndex(null); // Reset active video index
    }
  };

  useEffect(()=>{
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange); // Safari
    document.addEventListener('mozfullscreenchange', handleFullscreenChange); // Firefox
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return ()=>{
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    }
  },[]);


  return (
    <div className='invite-video'>
      {InvitaionVideo.map((InvitaionVideoList, index) => (
        <div className="InvitaionVideoList" key={index} >
          <video  ref={(el) => (videoRef.current[index] = el)} style={{zIndex : '1'}} controls = {false}  onClick= {()=> handleVideoClick(index)} src={InvitaionVideoList} loading="lazy"></video>
           <Lottie 
           key={index}
        animationData={icon}
        loop={true} 
        autoplay={true}
        style={{ height:50, width: 50 , zIndex : 2, position : 'absolute', top : '50%',left : '50%',cursor : 'pointer' ,transform: "translate(-50%, -50%)"}} 
        onClick={()=> handleVideoClick(index)}
      />
        </div>
      ))}

      {InvitaionPhoto.map((InvitaionPhoto,index) => (<div className='InvitaionVideoList' key={index}> 
        <img  ref={(el) => (photoRef.current[index] = el)} src={InvitaionPhoto}  onClick = {()=> open(index)}alt="" loading='lazy' />
      </div>))}


    </div>
  )
}

export default Previous
