import React,{useEffect} from 'react'
import '../App.css'

function About() {


    return (
        <>
            <div className="container1"><h1>About TB-Detector</h1></div>
            <div className="aboutpage">
            <h3 className='fs-3  text-center'><br/> <br/> <u>About Tuberculosis </u> </h3>
            <p className='fs-5 fw-medium my-3'> Tuberculosis (TB) is a bacterial infection that primarily affects the lungs but can also affect other
                 parts of the body.<br/> It is caused by the bacterium Mycobacterium tuberculosis. TB is a contagious disease
                  and spreads through the air<br/> when an infected person coughs or sneezes, releasing tiny droplets containing 
                  the bacteria.</p><br/>
            <h3 className='fs-3 my-4 text-center'> <u>How We Detect Tuberculosis </u> </h3>
            <p className='fs-5 fw-medium my-3'>It's important to note that TB detection using machine learning is a complex task, and the<br/>
             performance of the model depends on the quality and diversity of the data used for training. Moreover, regulatory and ethical <br/>
             considerations play a significant role in the deployment of such models in healthcare settings to ensure patient safety and data privacy.
             
            <br/>
             <li>Data Collection</li> 
             <li>Data Preprocessing</li> 
             <li>Feature Extraction</li> 
             <li>Model Selection</li> 
             <li>Training</li> 
             <li>Validation and Testing</li> 
             <li>Fine-Tuning and Optimization</li> 
             <li>Deployment</li> 
             
             </p>
            </div>

            </>

    )
}

export default About