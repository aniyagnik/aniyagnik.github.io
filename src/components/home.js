
import '../styles/home.css'
import { Card,Image } from 'react-bootstrap';
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  const contacts = [
    {
      title:'Linkedin',
      link:'https://www.linkedin.com/in/anirudhyagnik/',
      icon: <FaLinkedin size={20}/>
    },
    {
      title:'GitHub',
      link:'https://github.com/aniyagnik',
      icon: <FaGithub size={20} />
    },
    {
      title:'Leetcode',
      link:'https://leetcode.com/u/ani789yagnik/',
      icon: <SiLeetcode size={20} />
    }

  ]
  return (
    <div className="home">
      <div className='content'>
        <div className='picture'>
          <Image thumbnail className='profilePic' src='https://i.pinimg.com/originals/ee/2e/2d/ee2e2da83529499e849591482beff620.jpg' alt='profile image'/>
        </div>
        <div className='aboutContainer'>
          <div className='about'>
            <Card>
              <Card.Header as="h4">Hi There!! I am</Card.Header>
              <Card.Header as="h2">Anirudh Shankar Yagnik</Card.Header>
              <Card.Body>
                <Card.Text className='text-sm-start'>I am a <span className='aboutBold'>MERN stack developer</span> passionate about creating dynamic web applications.</Card.Text>
                <Card.Text>I am exploring the integration of <span className='aboutBold'>machine learning (ML)</span> to build smarter, data-driven solutions.</Card.Text>
                <Card.Text>My <span className='aboutBold'>goal is to bridge the gap between innovative web development and intelligent AI-powered applications.</span></Card.Text>
                <Card.Text>experienced in<span className='aboutBold'> Data Structures and Alogirthm</span></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='contact'>
        {
          contacts.map(item=>(
            <a href={item.link} style={{color:'white',textDecoration:'none'}}>
              <div style={{display:'flex',gap:10}}>
                {item.icon}
                {item.title}
              </div>
            </a>
          ))
        }
      </div>
    </div>
  )
}