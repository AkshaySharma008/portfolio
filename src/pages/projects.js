import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


function projectPage(){
    return(
        <div className="projectPage">
            <h1 className="Project-heading text-center pt-3">Projects</h1>
            <p className="project-subheading text-center">The application which I have developed using my knowledge</p>
            <div className="">
                <div className="row p-5 m-auto ">
                <div className="projectcard dual">
                    <div className="header">
                    <h3>Live Doodler</h3><br></br>
                    <h5>This project helps multiple peopple to collab and write together.
                         Its motive is to provide a solution to hardware subjects teachers to teach like Maths, Microprocessors, TOC etc.  
                    </h5>
                    <h6>TECH  STACK - NODE JS , SOCKET IO , HTML/CSS/JS </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/AkshaySharma008/DoodleWithNodeSocket"
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        disabled={true}
                        startIcon={<LanguageIcon />}
                    >
                        Demo
                    </Button>
                    </div>
                </div>

                <div className="projectcard dual">
                    <div className="header">
                    <h3>ANUBHAV</h3><br></br>
                    <h5>This project is for the students of my college to get experinece blogs of Internships and FTE opportuinity
                        from the 3rd year and 4th year students and alumni.
                        This is used by almost all students to get very precise guidance for many companies.  
                    </h5>
                    <h6>TECH  STACK - MERN STACK, AZURE  </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        disabled={true}
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        href="https://anubhav.aitoss.club"
                        startIcon={<LanguageIcon />}
                        target="_blank"
                    >
                        Demo
                    </Button>
                    </div>
                </div>

                <div className="projectcard dual">
                    <div className="header">
                    <h3>XMEME</h3><br></br>
                    <h5>XMEME is a meme streaming platform where user can come and post their memes using the image URL and writting caption.
                        It has basic functionality of add memes, edit memes, delete memes.  
                    </h5>
                    <h6>TECH  STACK - MERN STACK, AZURE  </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/AkshaySharma008/XMeme-A-Meme-Streaming-Platform"
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        href="https://stupefied-hypatia-a8fb74.netlify.app/"
                        startIcon={<LanguageIcon />}
                    >
                        Demo
                    </Button>
                    </div>
                </div>

                <div className="projectcard dual">
                    <div className="header">
                    <h3>InstaVue</h3><br></br>
                    <h5>This project is a clone of instagram developed while learning VueJS which have functionality 
                        of Create post, like and comment on posts.
                        Users can follow others, edit pictures while posting etc.  
                    </h5>
                    <h6>TECH  STACK - VUE JS, BOOTSTRAP </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/AkshaySharma008/instaVue"
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        disabled={true}
                        startIcon={<LanguageIcon />}
                    >
                        Demo
                    </Button>
                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}

export default projectPage