import React from 'react'
import image1 from "../asset/images/fun_1.png"

function Functional() {
  return (
    <div>
      <section className="container-fluid pb-3 pb-md-3 px-0">
        <img src={image1} className='img-fluid' alt="" />
      </section>
      <section className='container py-3 py-md-3'>
        <h2 className='text-center'>Functional Nutrition:"Food is Medicine"</h2>
        <div className='linefu mb-4'></div>
        <p className='acup1 text-center'>Contrary to popular trend ,there is no single food/diet which works for all.Infact,the right nutrition strategy for you is the one designed to address your unique body composition, health concerns and individual goals.We work on food as medicine fundamentals to improve functioning of every organ so that you thrive with our functional Nutrition programs.</p>
        <p className='acup mt-4'>‘Care and Thrive’ Nutrition: our nutrition experts will design a diet plan as per your needs and goals. you can register for-</p>
        <ul className='acup'>
          <li>1 month beginner ‘Care & Thrive’ Nutrition</li>
          <li>3 months intermediate ‘Care & Thrive’ Nutrition</li>
          <li>6 months+ ‘Care & Thrive’ Nutrition</li>
          <li>Annual advanced plan</li>
        </ul>
      </section>
    </div>
  )
}

export default Functional