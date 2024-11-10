import React, { useEffect, useRef ,useState} from 'react'
import '../PreviousVideo/Previous.css'
import icon from '../VideosPhotoes/lottieflow-play-05-000000-easey.json'
import Lottie from 'lottie-react'


const Invitation = () => {

  const videoRef = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const videoes  = [
   ''
  ]
  

  const handleVideoClick = (index)=>{
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
    <>
    
   { videoes ? ( <div className='invite-video'>
    {videoes.map((videoes, index) => (
      <div className="InvitaionVideoList" key={index} >
        <video  ref={(el) => (videoRef.current[index] = el)} style={{zIndex : '1'}} controls = {false}  onClick= {()=> handleVideoClick(index)} src={videoes} loading="lazy"></video>
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


  </div>) : ( <p style={ { fontSize : '6rem', position : 'absolute', top : '50%',left : '50%', color : 'red'}}>No Videos</p>)}
  </>
  )
}

export default Invitation
