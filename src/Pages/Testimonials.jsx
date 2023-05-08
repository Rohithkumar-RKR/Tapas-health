import React from 'react'
import image1 from "../asset/images/banner-testimonials12.jpg"
import image2 from "../asset/images/testimoinal-1.png"
import image3 from "../asset/images/testimoinal-2.png"
import image4 from "../asset/images/testimonial-quote1 (1).jpg"

function Testimonials() {
  return (
    <div>
      <section className='container-fluid py-3 py-md-3'>
        <img src={image1} className="img-fluid" alt="" />
      </section>
      <section className='container py-2 py-md-2'>
        <h2 className='text-center testsect1'>Testimonials</h2>
        <h3 className='mt-4'>Patient testimonial, what will your story be?</h3>
        <div className='linetest mb-4'></div>
         <div className='row gy-3'>
          <div className='col-md-6'>
            <img src={image2} className="img-fluid" alt="" />
          </div>
          <div className='col-md-6'>
           <img src={image3} className='img-fluid' alt="" />
          </div>
          <div className='col-md-6'>
          <div className="">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/gmlTIiTGTMI" title="YouTube video" allowfullscreen=""></iframe>
                        </div>
           </div>
           <div className="">
                        <div className="p-2">
                            <h4 className="fw-bold">Health Condition: </h4>
                            <p>Varicose veins and frozen shoulder.</p>
                        </div>
                    </div>
          </div>
          <div className='col-md-6'>
          <div className="">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/5I-FXJA0w2c" title="YouTube video" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-2">
                            <h4 className="fw-bold">Health Condition: </h4>
                            <p>Varicose veins and Arthritis</p>
                        </div>
                        
                    </div>
          </div>
          <div className='col-md-6'>
          <div className="">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/4AzO533iaBw" title="YouTube video" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-2">
                            <h4 className="fw-bold">Health Condition: </h4>
                            <p>A severe case of Fecal incontinence: involuntary loss of bowel
                                content ,which is complete loss of control over bowel (defecation )that results in urge
                                to
                                pass motion all the time but unable to wait to reach the bathroom.</p>
                        </div>
                    </div>
          </div>
          <div className='col-md-6'>
          <div className="">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/AXceyjo749I" title="YouTube video" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-2">
                            <h4 className="fw-bold">Health Condition: </h4>
                            <p>Slip Disc and cervical spondylosis : She came in a condition of excruciating cervical
                                pain and slip disc issue.she had very
                                limited range of movement, cudn't even sit on the first day. Post MRI she was asked to
                                undergo surgery by others.</p>
                        </div>
                    </div>
          </div>
          <div className='col-md-6'>
          <div className="">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/gVKqdOiS4fU" title="YouTube video" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-2">
                            <h4 className="fw-bold">Health Condition: </h4>
                            <p>Patient- Savitri has been treated for immunity,insomnia, gastritis, Acute pain
                                (post breast removal surgery),psychological disorders like Depression and anxiety
                                attack.</p>
                        </div>
                    </div>
          </div>
          <div className='col-md-6'>
          <div className="">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/TC5bcqBge1k" title="YouTube video" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-2">
                            <h4 className="fw-bold">Health Condition:</h4>
                            <p>Bronchitis chronic bronchitis, coughing up thickened mucus, running nose, severe
                                headache,fever,chills, inflammation to the airways of lungs. Fatigue, shortness of
                                breath.
                                Long use of steroids(western medicine) damaged her immunity and holistic health
                                system.</p>
                        </div>
                    </div>
          </div>
         </div>
      </section>
      <section className="container py-3 py-md-3">
        <img src={image4} className='img-fluid' alt="" />
      </section>
    </div>
  )
}

export default Testimonials