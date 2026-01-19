import { FaFacebookF } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
// auto typing
import { ReactTyped } from "react-typed";
import homevdo from '../imgs/homevdo.mp4'
import homeimg from '../imgs/home.png'


const Home = () => {
  return (
    <div className="home" id="home">
        {/* Background Video */}
  <video
    className="bg-video"
    autoPlay
    loop
    muted
    playsInline
  ><source src={homevdo} type="video/mp4" />
  </video>
        <div className='home-content'>
            <div className="h-content">
                <h1>Hi</h1>
                <h2><span>This is </span> Logeshwari Sathya</h2>
               <h3>
        I'm a{" "}
        <div className="typing">
          <ReactTyped
            strings={[
                "Python Full-Stack Developer",
                "Front-End Developer",
                "React JS Developer",
                "UI / UX Designer",
                "Back-End Developer",
                "Database Developer",
                "SQL / MySQL Developer"
            ]}
            typeSpeed={80}
            backSpeed={60}
            backDelay={1000}
            loop
          />
        </div>
      </h3>
                <a href="#about">About Me</a>
                <div className="icons">
                    <a href="https://www.facebook.com/share/1C9Y1F8HhZ/"><FaFacebookF /></a>
                    <a href="https://github.com/logeshwarisathya/"><FaGithubAlt /></a>
                    <a href="https://www.linkedin.com/in/logeshwari-sathya"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/logeshwari_sathya/?next=%2F&hl=en"><RiInstagramFill /></a>
                </div>
            </div>
            

        </div>
        <div className='home-img'>
            <img src={homeimg} alt="" />
        </div>
    </div>
  )
}

export default Home
