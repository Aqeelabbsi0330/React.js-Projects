import React from 'react'
import {useParams} from 'react-router-dom'
import './User.css'

export default function User() {
    // const {UserId}=useParams()
    const UserId=useParams()//ye pora object dyata ha ager ye tareeka kia to nechy dot sy us key ko eccess krna pary ga 
    // ni to oper wala method sy direct id nekal kr nechy us ko mention kr skty hn 
    console.log(UserId);
    const username = 'ali123'; // Apna GitHub ya koi bhi username yahan likhein
  return (
    <div>
        
        <div className="username-container">
      <h2 className="username-heading">User : {UserId.UserId}</h2>
      {/* <h2 className="username-heading">User {UserId}</h2> */}
      {/* direct id is trha ay gy */}
      <p className="username-text">Welcome back, <strong>{username}</strong>! Hope you're having a productive day.</p>
    </div>
    </div>
  )
}
