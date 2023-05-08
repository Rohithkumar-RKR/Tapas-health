import React from 'react'
import image1 from "../asset/images/Yoga.png"
function Yoga() {
  return (
    <div>
      <section className='container-fluid p-0'>
        <h2 className='py-4  headga text-center m-0'>Yoga is the journey of the self , to the self , through the self.</h2>
        <img src={image1} className='img-fluid' alt="" />
      </section>
      <section className='container py-3 py-md-3'>
        <h2 className='text-center'>Therapeutic Yoga:</h2>
        <div className='lineyo'></div>
        <div className='acup mt-4'>
         <p>We apply different practices of yoga to help alleviate health conditions and promote holistic wellbeing.These conditions can range from physical ailments to mental emotional stress.The yogic therapeutic program includes practices of different Asana,Pranayama techniques,Kriya ,Dhyana(Meditation), Yoga Nidra (A practice of deep relaxation) to bring back balance in the system.</p>
         <p>Our therapeutic yoga specialist can pull from all forms of yoga and a broad spectrum of yoga pose to design a program that fits best for your needs. Our trust is through these teachings you will find more ease in your body, tranquil mind, and greater levels of energy and overall well-being.</p>
         <p>We have different therapeutic yoga programs to help to ease conditions like:</p>
          <ul>
            <li>Arthritis</li>
            <li>Back pain And neck pain</li>
            <li>Muscular issues</li>
            <li>All types of headaches</li>
            <li>Insomnia And sciatica</li>
            <li>Gastrointestinal issues</li>
            <li>Weight gain</li>
            <li>Hormonal imbalance-thyroid conditions</li>
            <li>Mental issues like depression</li>
            <li>Anxiety also pre and postnatal yogic care.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Yoga