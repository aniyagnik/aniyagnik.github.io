
import '../styles/home.css'
import { Card,Image } from 'react-bootstrap';
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ProfilePic from '../assets/asy-removebg-preview.jpg'

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
          <Image thumbnail className='profilePic' src={ProfilePic} alt='profile image'/>
        </div>
        <div className='aboutContainer'>
          <div className='about'>
            <Card>
              <Card.Header as="h2">Hi There!! I am</Card.Header>
              <Card.Header as="h1">Anirudh Shankar Yagnik</Card.Header>
              <Card.Text className='aboutGoal'>trying bridge the gap between innovative web development and intelligent AI-powered applications.</Card.Text>
              <Card.Body style={{fontSize:'1.1em'}}>
                <Card.Text >current pursuing <span className='aboutBold'>M.Tech in Computer Science</span> from Netaji Subhas University of Technology</Card.Text>
                <Card.Text>I am a <span className='aboutBold'>MERN stack developer</span> passionate about creating dynamic web applications.</Card.Text>
                <Card.Text>I am exploring the integration of <span className='aboutBold'>machine learning (ML)</span> to build smarter, data-driven solutions.</Card.Text>
                <Card.Text>experienced in<span className='aboutBold'> Data Structures and Alogirthm</span></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='socials'>
        {
          contacts.map(item=>(
            <a href={item.link} key={item.link} style={{color:'white',textDecoration:'none'}}>
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