import React from 'react'
import './Programs.css'
import program_1 from '../../assets/images/program-1.png'
import program_2 from '../../assets/images/program-2.png'
import program_3 from '../../assets/images/program-3.png'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'

export default function Programs() {
  return (
    <div className='programs container' id='program'>
        <div className="program">
            <img src= {program_1}alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="icon1" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src= {program_2}alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="icon2" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src= {program_3}alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="icon3" />
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}
