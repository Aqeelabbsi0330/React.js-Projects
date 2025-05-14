import React from 'react'
import { Link } from 'react-router-dom'
import student from '../../assets/student.jpg'

export default function Home() {
  return (
    <div>
      <div className="custom-container">
            <aside className="custom-aside">
                <div className="content">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="custom-heading">
                            Download Now
                            <span className="hidden sm:block">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="custom-link"
                            to="/"
                        >
                            <img src={student} alt="" 
                            fill="white"
                            width="24"
                            height="24"
                            // xmlns="http://www.w3.org/2000/svg"
                            // fillRule="evenodd"
                            // clipRule="evenodd"
                        />
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="custom-img1">
                    <img src={student} alt="image1" />
                </div>
            </aside>

            {/* <div className="custom-center-img">
                <img className="custom-center-img img" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div> */}

            <h1 className="custom-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Explicabo facilis qui dolores.</h1>
        </div>
    </div>
  )
}
