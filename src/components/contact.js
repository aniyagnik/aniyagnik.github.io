import { FaHome, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import '../styles/contact.css'

export default function Contact() {
  const contactList = [
    {
      contact:'+91 8076580693',
      icon:<FaMobile />
    },
    {
      contact:'ani789yagnik@gmail.com',
      icon: <MdEmail />
    },
    {
      contact:'Delhi, India',
      icon: <FaHome/>
    }
  ]
  return (
    <div className="contact">
      <div className='form'>
        <form action="/contact/sendmail">
          <input type="text" disabled='disabled' id="email" name="email" value="ani789yagnik@gmail.com"/>
          <input type="text"  id="cemail" name="cemail" placeholder="Your email.."/>
          <input type="text"  id="subject" name="subject" placeholder="subject"/>
          <textarea type="text" id="message" name="message" placeholder="message"></textarea>
        
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div className='contactList'>
        <div className="contactListHead">Contact</div>
        <div>
          {
            contactList.map(item=>(
              <div className="contactInfo">
                {item.icon} {item.contact}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}