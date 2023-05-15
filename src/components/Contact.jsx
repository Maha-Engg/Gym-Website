import React from 'react';

const Contact =()=>{

    return (
        <div id='contact'>
            <h1> CONTACT ME</h1>
            <form>
                <input type='text' placeholder='FullName' required/>
                <input type='email' placeholder='E-mail' required/>
                <textarea placeholder="Write Your Text here..." name='Message' />
                <input type='Submit' value='send'/>
            </form>


        </div>
    )
}

export default Contact;