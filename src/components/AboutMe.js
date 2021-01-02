import React from 'react'
import Right from '../images/rightarrow.png'
import Left from '../images/leftarrow.png'
import Warda from '../images/warda.jpg'

import AOS from 'aos';

const AboutMe = () => {

    
    AOS.init();
   
    

    return (
        <div className="container mx-auto my-5" id="aboutme">
            <div className="row" >
                <div className="col-md-6 my-5" data-aos="fade-down" >
                    <h2 className="my-5 heading ">
                        About Me
                    </h2>
                        <p>
                        
                        Hello! I'm Wardha Kashif, an undergraduate student at NED university of engineering and technology Karachi. I'm currently in my final year of bachelor's in software engineering. I consume much of my time working on self-projects associated with web technologies often and on their deployment. I relish learning new technologies and I continually try to keep myself updated.


            
                    
                        </p>
                    
                    
                </div>
                <div className="col-md-6 my-5 py-5" style={{ textAlign: 'center' }} data-aos="flip-left">
                    <img src={Warda} alt="me" className="img-thumbnail" style={{height:'50vh'}} />
                </div>
            </div>
            <div className="row">
                <a href="#header" className="mx-auto">
                    <img src={Left} alt="back"  />
                </a>
                <a href="#myWork" className="mx-auto">
                    <img src={Right} alt="forward" />





                </a>
            </div>
        </div>
    )
}

export default AboutMe
