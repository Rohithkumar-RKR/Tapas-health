import React from 'react'
import image1 from "../asset/images/about-us.jpg"
import image2 from "../asset/images/about_1.png"
import image3 from "../asset/images/about_founder.jpg"
import image4 from "../asset/images/vision.png"

function AboutUs() {
  return (
    <div>
      <section className="container-fluid p-0 pb-3 pb-md-3">
        <img src={image1} className="img-fluid" alt="" />
      </section>
       <section className='container py-3 py-md-3'>
        <h1 className='about1 text-dark'>TAPAS <span className='about2'>holistic health systems</span> </h1>
        <div className='lineabout'></div>
       </section>
       <section className='container py-3 py-md-3'>
       <div className='row'>
        <div className='col-md-8'>
          <p className="asect3">We work with patients on the all the aspect of health at physio-psych-energy(Qi) level so that the transformation is whole. Every person is unique in terms of functioning on physical, emotional, mental plane and exists in totally different social environment so the treatment and healing plans should be unique to each. We focus on your wellness inside-out through various therapies and ancient traditional alternative sciences, so that nothing stands between you and your best functioning self.</p>
          <p className='asect3'>In our body every organ is interlinked and therefore it’s important to look at ailments holistically for complete healing. Therefore, our prime focus is on the root cause of the ailment and not just the symptoms. As a result, you’ll experience a significant transformation on all related aspects of body, mind and energy systems.</p>
        </div>
        <div className='col-md-4'>
          <img src={image2} className="img-fluid" alt="" />
        </div>
       </div>
       </section>
       <section className='container py-2 py-md-2'>
        <h2 >Meet the founder</h2>
        <div className='lineabout3'></div>
      </section>
      <section className='container py-2 py-md-2'>
        <div className='row gy-3'>
          <div className='col-md-4'>
            <img src={image3} className="img-fluid" alt="" />
          </div>
          <div className='col-md-8'>
            <h3>Ritika Anchlia</h3>
            <div className='lineabout3 mb-4'></div>
            <div className='m-0'><h6 className='mb-0'>-MD(Acu),Yoga Trainer,</h6></div>
            <div className="m-0"><h6>Nutrition coach(PN)(NASM)</h6></div>
            <p className='asect3 mt-4'>She has been practicing holistic health science for various health issues related to gastrointestinal, musculoskeletal, respiratory, neurological and gynaecology department for over a decade now.</p>
          </div>
        </div>
      </section>
      <section className='container py-1 py-md-1'>
        <h3>In Her words –</h3>
        <div className='asect3'>
        <p>“I have had a lot of success in treating people for general as well as chronic ailments through holistic approach by using Acupuncture, Yoga and Nutrition (food is medicine) and other amazing ancient therapies, in an integrative way.</p>
        <p>The fundamental is to see the body as a whole to find the root cause of any health concern. Every organ is interlinked and has an impact on physical, mental, emotional and eventually functional level. Our expertise lies in working on the root cause and not just treating the symptoms superficially.</p>   
        <p>We provide holistic transformation through acupuncture, yoga, nutrition and lifestyle changes. We have a team of licensed and experienced practitioners for these services to bring a positive change and help live better.</p> 
        <p>Yes, why restrict to One, when we can choose from many such amazing ancient therapies which are in practice for thousands of years and are significantly effective as well as popular in many other countries.</p>
        <p>I strongly believe in the sciences which stimulates the self-healing mechanisms of the body and has the power to make a positive change. For example, Acupuncture is one such amazing science, clinically proven and WHO approved for treating many acute and chronic ailments. We are here to provide you a platform, here you can avail benefits of these ancient sciences and age-old wisdom.”</p>
        </div>
      </section>
      <section className='container py-2 py-md-2'>
        <h3>Vision</h3>
        <div className='lineabout31 mb-3'></div>
        <div className='row gy-3 vision  mt-3'>
          <div className='col-md-3 asect3 text-center'>
            <img src={image4} className="img-fluid " alt="" />
          </div>
          <div className='col-md-9 asect3'>
          <p>TAPAS’s vision is to empower people with better health by integrating three dimensions; Mind- Body- Energy meridians (Qi/chi).</p>
            <p>We put together a highly customized integrative health-plan (Acupuncture, Yoga, Nutrition, Herbs and more) to assist in healing from within and without any side-effects. Each of us have a unique body constitution and therefore a need of customized health plan.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs