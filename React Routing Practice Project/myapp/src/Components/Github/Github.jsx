import React from 'react'
import { useState, useEffect } from 'react'
import './Github.css'

export default function Github() {
    const [Data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Aqeelabbsi0330')
      .then((res)=>res.json())
      .then((Data)=>{
        console.log(Data)
        setData(Data)
      })
    
      
    }, [])
    
  return (
    <div>
       <div className="github-wrapper">
      <h2 className="github-heading">🌐 My GitHub Profile</h2>
      <div className="followers">Followers: {Data.followers}</div>
      <div className="github-card">
        <img
          src={Data.avatar_url}
          alt="GitHub Avatar"
          className="github-avatar"
        />
        <div className="github-info">
          <h3 className="github-name">Octocat</h3>
          <p className="github-bio">I am a mascot of GitHub. Love to code & collaborate!</p>
          <a
            href="https://github.com/octocat"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
