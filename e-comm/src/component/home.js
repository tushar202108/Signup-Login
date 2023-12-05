import React from 'react'
import '../App.css'
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

function home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
<>

    <AutoplaySlider className='AwesomeSlider' play={true} cancelOnInteraction={false} interval={2000}>
    <div data-src={pic1} />
    <div data-src={pic2} />
    <div data-src={pic3} />

  </AutoplaySlider>
</>
  )
}

export default home