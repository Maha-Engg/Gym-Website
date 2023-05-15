import React from 'react';
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';




const Feature =()=>{
return <>
<div id='features'>
    <h1> FEATURES</h1>
    <div className='a-container'>
        <Featurebox img={fimage1}  title='Weight Lifting'
        para='Exercise not only Changes Your Body ,It Changes Your Mind, And Your Attitude'/>
        <Featurebox img={fimage2} title='Specific Muscle'
        para='Exercise Should be regarded as a tribute to the heart'/>
        <Featurebox img={fimage3}  title='Flex Your Muscle'
        para="Take Care of Your Body. it's the only place you have to live"/>
        <Featurebox img={fimage4}  title='Cardio Exercise'
        para='Healthy is an outfit that looks different on everybody'/>
        

    </div>

</div>

</>

}

export default Feature;