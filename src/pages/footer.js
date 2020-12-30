import React from 'react'
import './styles.css'

function footer(){
    return (
        <div className="footer-section">
        <div className="container">
            <div className="footer-cta pt-4 pb-3">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4 className="landingPage-heading">Find me</h4>
                                <span>Gwalior, MadhyaPradesh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4 className="landingPage-heading">Call me</h4>
                                <span>+91-9877662729</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4 className="landingPage-heading">Mail me</h4>
                                <span>akshaysharma30121999@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-3">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <h3 className="landingPage-heading">Akshay Sharma</h3>
                            <div className="footer-text">
                                <p>I love to connect with peoples and love to talk with them, help them, discuss with them about life aspects, technologies, adventure sports etc. </p>
                            </div>
                            <div className="footer-social-icon">
                                <span className="landingPage-heading">Connect with me</span>
                                    <div className="rounded-social-buttons">
                                        <a href="https://www.facebook.com/sharma.akshay.me/"><span className="circle-button facebook"></span></a>
                                        <a href="https://twitter.com/akshay8844"><span className="circle-button twitter"></span></a>
                                        <a href="https://www.linkedin.com/in/akshaysharma008/"><span className="circle-button linkedin"></span></a>
                                        <a href="https://www.instagram.com/me.akshay.sharma/"><span className="circle-button instagram"></span></a>
                                        <a href="https://github.com/AkshaySharma008"><span className="circle-button github"></span></a>
                                    </div>  
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3  className="landingPage-heading">Show your Interest</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>If you have short query or want quick response, just post it here. I will respond as soon as possible.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2020, All Right Reserved <a href="https://akshaysharma008.github.io/Portfolio/">Akshay Sharma</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <p className="landingPage-heading" style={{color:'#f5aa09'}} >May the source be with you :) </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default footer