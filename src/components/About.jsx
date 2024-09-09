import React from 'react';
import aboutImage from '../images/about.png'


import React from 'react';
import aboutImage from '../images/about.png'
const About=()=>{

    return(
     <div id='about'>
        <div className='about-image'>
            <img src={aboutImage} alt=''></img>
          </div>
          <div className='about-text'>
            <h1>LEARN  MORE ABOUT US</h1>
            <p>  We Are From Gym We Are From Gym We Are From Gym We Are From Gym We Are From Gym</p>
          
          <button> Read More</button>
          </div>

     </div>

    )
}

export default About;
