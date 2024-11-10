import React from 'react'
import './Invitation.css'

const Invitation = () => {
  const InvitaionVideo = [
    'dfd',
    'dfd',
    'dfdsd',
    'dfd',
    'dsdfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd',
    'dfd'
  ]
  return (
    <div className='invite-video'>
      {InvitaionVideo.map((InvitaionVideoList,index)=>(
        <div className="InvitaionVideoList" key={index}>{InvitaionVideoList}</div>
      ))}
      
    </div>
  )
}

export default Invitation
