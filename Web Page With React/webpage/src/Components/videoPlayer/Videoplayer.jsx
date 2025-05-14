import React ,{useRef}from 'react'
import './Videoplayer.css'
import video from '../../assets/images/college.mp4'
export default function Videoplayer({Playstate,setPlaystate}) {
   const player=useRef()
  const closePlayer=(e)=>{
    if(e.target===player.current){
      setPlaystate(false)
    }
  }
  return (
    <div className={`video_player ${Playstate?'':'hide'}` }ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}
