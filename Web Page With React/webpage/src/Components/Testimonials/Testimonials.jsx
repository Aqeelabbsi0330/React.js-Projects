import React ,{useRef,useState,useEffect} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'

export default function Testimonials() {
    const slider = useRef();
    const [tx, setTx] = useState(0);
    
     
    const slideForward = () => {
        if(window.innerWidth<=650){
            if (tx > -75) {
                setTx(tx - 25);
              } 
        }
        else {
            if (tx > -50) {
                setTx(tx - 25);
              } 
        }
      
    };
  
    const slideBackward = () => {
      if (tx < 0) {
        setTx(tx + 25);
      } 
    };
    useEffect(() => {
        slider.current.style.transform = `translateX(${tx}%)`;
        slider.current.style.transition = 'transform 0.5s ease';
      }, [tx]);
    
    
  return (
    <div className='testimonials' id='testimonials'>
        <img src={next_icon} alt="" className='next_btn' onClick={slideForward} /> 
        <img src={back_icon} alt="" className='back_btn' onClick={slideBackward} /> 
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emily Williams 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, 
                                state-of-the-art facilities, and commitment to academic
                                excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, 
                                state-of-the-art facilities, and commitment to academic
                                excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Emily Williams 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, 
                                state-of-the-art facilities, and commitment to academic
                                excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. 
                                The supportive community, 
                                state-of-the-art facilities, and commitment to academic
                                excellence have truly exceeded my expectations.
                            </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
