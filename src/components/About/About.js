import React from 'react';
import './About.css'
import Me from '../../assets/me22.png'


const About = () => {

    const [state] = React.useState([
        { id: 1, title: "M.Sc:", text: "CSE" },
        { id: 2, title: "B.Sc:", text: "CSE" },
        { id: 3, title: "Email:", text: "md.sumon35855@gmail.com" },
        { id: 4, title: "Phone:", text: "+8801749036855" },
        { id: 5, title: "City", text: "Rangpur,Dhaka,Bangladesh" },
        { id: 6, title: "Freelance", text: "Available" },
    ]);



    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <h1>Hi There</h1>
                    <p>I am a hard-working recent university Post graduate (3.02 GPA, Master of Science in Computer Science and Engineering) from Islamic University, Bangladesh. Throughout my academic career, I was consistently praised as adaptable by my professors and peers. While working on academic and extracurricular projects, I developed proven communication, teamwork and planning skills, which I hope to leverage into the Junior Web developer role at your company.</p>

                    <div>
                        <div className="info__contacts">
                            <div className="row">
                                {state.map((info) => (
                                    <div className="col-6">
                                        <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

    );
};

export default About;