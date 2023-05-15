import React from 'react';

const Featurebox =(props)=>{
return (
    
<div className='a-box'>
    <div clasName='a-b-img'>
        <img src={props.img} alt=''/>
     </div>
    <div className='a-b-text'>
        <h2> {props.title}</h2>
        <p>  {props.para}</p>

    </div>
</div>

)

}

export default Featurebox;