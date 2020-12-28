import React from 'react'
import './styles.css'
import avatar from '../AkshaySharma008-avatar.jpeg'
import Footer from './footer'
import Typed from 'react-typed';

function landingPage(){
    return(
        <div className="landing-body">
            <div className="text-center avatar">
            <img src={avatar} alt="AkshaySharma008-avatar" className="landingPage-avatar"></img>
            <h3 className="landingPage-heading mt-4">Hey, I am</h3>
            <p className="landingPage-name">AKSHAY SHARMA</p>
            </div>
            <div className="text-center p-3">
            <Typed className="typedContent"
                strings={[
                    'I am a Student',
                    'I am a Full-Stack Developer',
                    'I am an Open Source Enthusiast',
                ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                </div>
            <p className="landingPage-subheading text-center px-3">I am a Software Engineer who is passionate about building</p>
            <p className="landingPage-subheading text-center px-3">products to create a positive impact on the world.</p>
            <p className="landingPage-subheading text-center px-3">I write code. I love building cool stuff!</p>
            <br></br>
            <div className="socialIcons col-md-4 m-auto">
            <div className="rounded-social-buttons text-center">
                <a href="https://www.facebook.com/sharma.akshay.me/"><span className="circle-button facebook"></span></a>
                <a href="https://twitter.com/akshay8844"><span className="circle-button twitter"></span></a>
                <a href="https://www.linkedin.com/in/akshaysharma008/"><span className="circle-button linkedin"></span></a>
                <a href="https://www.instagram.com/me.akshay.sharma/"><span className="circle-button instagram"></span></a>
                <a href="https://github.com/AkshaySharma008"><span className="circle-button github"></span></a>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default landingPage;