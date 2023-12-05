import React, { useEffect } from 'react'
import pic from './dev.jpg'
import kavya from './kavya.jpg'
import Ashish from './ashish.jpg'
import priyanshi from './priyanshi.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Team() {
    useEffect(()=>{
        Aos.init({duration: 3000})
    },[]);


    return (
        <>
            <div className='container3'>
                <h1 className='text-center team'>Our Team</h1>
            </div>
            <div className='container4'>
                <div className="row w-100">
                    <div className="col " data-aos="fade-up">
                    <img src={pic} alt='' className='pic'/>
                    <p className='para' data-aos="fade-up">Dev Chaudhary<br/>Full-Stack Developer</p>
                    </div>
                    <div className="col" data-aos="fade-up">
                    <img src={kavya} alt='' className='pic'/>
                    <p className='para'data-aos="fade-up">Kavya Mittal<br/>Front-end Developer</p>
                    </div>
                    <div className="col"data-aos="fade-up">
                    <img src={Ashish} alt='' className='pic'/>
                    <p className='para'data-aos="fade-up"> Aashish Chaudhary<br/>Back-end Developer</p>
                    </div>
                    <div className="col"data-aos="fade-left">
                    <img src={priyanshi} alt='' className='pic'/>
                    <p className='para'data-aos="fade-up">Priyanshi Madaan<br/>Team Member</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team