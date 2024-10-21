import React from "react";
import "./style/style.scss"
import Element1 from "./img/Element1.png";
import Element2 from "./img/Element2.png";
import Element3 from "./img/Element3.png";
import Element4 from "./img/Element4.png";
import Element5 from "./img/Element5.png";
import Element6 from "./img/Element6.png";
import Back from "./img/Back.png";

const LightFolio = () => {
    return (
        <html>
            <header>
                <div className="mini-menu"><a href="">A portfolio template for designers</a><p>·</p><a href="">View all templates</a></div>
                <div className="main-menu"><a href="">Work</a><a href="">About</a><a href="">Contact</a></div>
            </header>
            <main>
                <div className="main-container">
                    <div className="main">
                        <div className="text">
                            <p>I’m Jonas — a senior <br /> product designer</p>
                            <p className="gray">that cares a lot about <br /> positive impact projects</p>
                        </div>
                        <p className="img-block-title">Featured work ·</p>
                        <div className="img-blocks">    
                            <div className="blocks-Wrapper">
                                <div className="img-cont">
                                    <img src={Element1} alt="" />
                                    <div className="bottom-cont">
                                        <p className="main-p">Rule ratio</p>
                                        <p>Product design</p>
                                    </div>  
                                </div>
                                <div className="img-cont">
                                    <img src={Element2} alt="" />
                                    <div className="bottom-cont">
                                        <p className="main-p">Situation</p>
                                        <p>Visual identity</p>
                                    </div>  
                                </div>
                                <div className="img-cont">
                                    <img src={Element3} alt="" />
                                    <div className="bottom-cont">
                                        <p className="main-p">Dry air</p>
                                        <p>User research</p>
                                    </div>  
                                </div>
                            </div>
                            <div className="blocks-Wrapper">
                                <div className="img-cont">
                                    <img src={Element4} alt="" />
                                    <div className="bottom-cont">
                                        <p className="main-p">Dry air</p>
                                        <p>User research</p>
                                    </div>  
                                </div>
                                <div className="img-cont">
                                    <img src={Element5} alt="" />
                                    <div className="bottom-cont">
                                        <p className="main-p">Dry air</p>
                                        <p>User research</p>
                                    </div>  
                                </div>
                                <div className="img-cont">
                                    <img src={Element6} alt="" />
                                    <div className="bottom-cont">
                                        <p className="main-p">Dry air</p>
                                        <p>User research</p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div className="text-block">
                            <div className="text-blocks">
                                <p className="tag">About me</p>
                            </div>
                            <div className="text-blocks">
                                <p>Phasellus accumsan rutrum lacus eget pulvinar. Fusce ac ipsum non nulla mollis molestie eu fringilla lacus. Vivamus eget ligula malesuada, rutrum nulla id, ultricies sem. In aliquam condimentum velit, ac rutrum felis ultrices in.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                                <p>Vivamus gravida aliquam faucibus. Nulla dictum lorem arcu, ut consectetur purus faucibus eget. Nam arcu tellus, sagittis sed facilisis in, pulvinar vitae enim. Pellentesque a dolor sollicitudin, accumsan elit non, lacinia lorem. Sed enim sapien, viverra vitae dolor ut, iaculis aliquet mi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={Back} alt="" />
                    </div>
                    <div className="experiende-cont">
                        <div className="split">
                            <p className="experience">Experience</p>
                        </div>
                        <div className="split">
                            <div className="compony-elements">
                                <p className="compony-name">Company name</p>
                                <p>Job title</p>
                                <p className="compony-data">August 2021–today</p>
                            </div>
                            <div className="compony-elements">
                                <p className="compony-name">Company name</p>
                                <p>Job title</p>
                                <p className="compony-data">August 2021–today</p>
                            </div>
                            <div className="compony-elements">
                                <p className="compony-name">Company name</p>
                                <p>Job title</p>
                                <p className="compony-data">August 2021–today</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-cont">
                        <div className="split">
                            <p>Services</p>
                            <div className="section">
                                <p>Design systems</p>
                            </div>
                            <div className="section">
                                <p>Product design</p>
                            </div>
                            <div className="section">
                                <p>UX design and research</p>
                            </div>
                            <div className="section">
                                <p>Design strategy</p>
                            </div>
                            <div className="section">
                                <p>Websites and mobile app design</p>
                            </div>
                        </div>
                        <div className="split">
                            <p>Selected clients</p>
                            <div className="section">
                                <p>Veja</p>
                            </div>
                            <div className="section">
                                <p>Polestar</p>
                            </div>
                            <div className="section">
                                <p>Allbirds</p>
                            </div>
                            <div className="section">
                                <p>Oatly</p>
                            </div>
                            <div className="section">
                                <p>Bang & Olufsen</p>
                            </div>
                        </div>
                    </div>
                    <div className="email-cont">
                        <p>Want to create <br /> something awesome? <br /> Drop me an email.</p>
                        <button>→ Hi@email.com</button>
                    </div>
                </div>
            </main>
            <footer>
                <div className="split border">
                    <div className="split-a">
                        <a href="">Home</a>
                        <a href="">Work</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="split-a">
                        <a href="">Twitter</a>
                        <a href="">Instagram</a>
                        <a href="">LinkedIn</a>
                    </div>
                </div>
                <div className="split">
                    <div className="split-a">
                        <a href="">Style guide</a>
                        <a href="">Licenses</a>
                        <a href="">Password</a>
                        <a href="">404</a>
                    </div>
                    <div className="split-a">
                        <p>Built by Bryn Taylor</p>
                        <p>Powered by Webflow</p>
                    </div>
                </div>
            </footer>
        </html>
    )
}

export default LightFolio;