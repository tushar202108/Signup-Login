import React from 'react'
import pic1 from './xray1.jpg'
import pic2 from './xray2.jpg'
import pic3 from './xray3.jpg'
import pic4 from './xray4.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';



function Details() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <>
            <AutoplaySlider className='AwesomeSlider z-n1 autoslide' play={true} cancelOnInteraction={false} interval={2000}>
                <div data-src={pic1} />
                <div data-src={pic2} />
                <div data-src={pic3} />
                <div data-src={pic4} />
            </AutoplaySlider>

            <div className="input-group mb-3 z-3 detailup">
                <input type="file" className="form-control " id="inputGroupFile02" />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>
            </div>
        </>
    )
}

export default Details