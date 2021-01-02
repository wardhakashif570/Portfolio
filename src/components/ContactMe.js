import React from 'react'


const ContactMe = () => {
    return (
        <div className="container text-center my-5" id="contact">
            <h3>Get In Touch With Me</h3>
            <div className="container  mx-auto text-center contact-container ">
                <a href="https://github.com/wardhakashif570?tab=repositories" className="contact-link" data-aos="fade-down">
                    <i className="fa fa-github"></i>
                </a>
               
                <a href="https://www.linkedin.com/in/wardha-kashif-5a8960177/?originalSubdomain=pk" className="contact-link" data-aos="fade-down">
                    <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="mailto:wardhakashif570@gmail.com" className="contact-link" data-aos="fade-down">
                    <i className="fa fa-envelope"></i>
                </a>
            </div>
        </div>

    )
}

export default ContactMe
