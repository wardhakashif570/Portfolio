import React from 'react'

const Technologies = () => {
    return (
        <div className="fluid-container tech-container my-5 py-5" id="tech">
            <div className="container sub-container row mx-auto">
                <div className="flex col-md-3 my-5 py-3 feature-box" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <h5 className="tech-headng">Languages</h5>
                    <ul className="tech-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>ES6</li>
                        <li>Python</li>
                        <li>PHP</li>
                    </ul>
                </div>
                <div  className="flex col-md-3 my-5 py-3 feature-box" data-aos="fade-up"
     data-aos-duration="500">
                    <h5 className="tech-headng">Framework And Libraries</h5>
                    <ul  className="tech-list">
                        <li>React</li>
                        <li>JQuery</li>
                         <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>Materialize</li>
                        <li>numPy</li>
                        <li>Pandas</li>
                    </ul>
                </div>
                <div  className="flex col-md-3 my-5 py-3 feature-box" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
                    <h5 className="tech-headng">Database Technologies</h5>
                    <ul  className="tech-list">
                        <li>My SQL</li>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                       
                    </ul>
                </div>
                <div  className="flex col-md-3 my-5 py-3 feature-box" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <h5 className="tech-headng">Tools</h5>
                    <ul  className="tech-list">
                        <li>Git</li>
                        <li>Firebase</li>
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>npm</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Technologies
