import React from 'react';
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>


      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>Frontend Development</h3>

          <div className="experience__content">


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>HTML</h4>
                <small className='text-light'>Expertise</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>CSS</h4>
                <small className='text-light'>Expertise</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>Tailwind</h4>
                <small className='text-light'>Expertise</small>

              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expertise</small>
              </div>
            </article>


          </div>
        </div>

        {/* End of front end */}

        <div className="experience__backend">


          <h3>Backend Development</h3>

          <div className="experience__content">


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>MongoDB</h4>
                <small className='text-light'>Comfortable</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>Express JS</h4>
                <small className='text-light'>Comfortable</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>Node JS</h4>
                <small className='text-light'>Comfortable</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div className='experience__details_info'>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;