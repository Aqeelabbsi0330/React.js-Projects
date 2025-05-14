import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d6b67887-900e-4823-8a19-bf347da5868d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
        <div className="contact_col">
              <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
              <p>Feel free to reach out through contact form or 
                  find our contact information below. Your feedback, questions, and suggestions are 
                  important to us as we strive to provide exceptional service to our university community.
                  </p>
                <ul>
                  <li><img src={mail_icon} alt="" />muhammadaqeelkhanabbasi@gmail.com</li>
                  <li><img src={phone_icon} alt="" />+923305925816</li>
                  <li><img src={location_icon} alt="" />Governmnet Postgraduate College Mandian Abbottabad</li>
                </ul> 
        </div>
        <div className="contact_col">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name'  placeholder='Enter your name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel"  name='phone' placeholder='Enter your phone number' required/>
            <label htmlFor="">Email</label>
            <input type="tel"  name='phone' placeholder='Enter your Email ID' required/>
            <label htmlFor="">Message</label>
            <textarea name="message" id="" rows="6"></textarea>
            <button type='submit' className="btn dark_btn">Submit Now <img src={white_arrow} alt="" /></button>
          </form>
          <span><i>{result}</i></span>
        </div>
    </div>
  )
}
