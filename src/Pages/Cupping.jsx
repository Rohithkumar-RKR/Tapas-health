import React from 'react'
import image1 from "../asset/images/cupping1.png"

function Cupping() {
  return (
    <div>
      <section className='container-fluid pb-3 pb-md-3 px-0'>
        <img src={image1}  className='img-fluid' alt="" />
      </section>
      <section className='container py-3 py-md-3'>
        <h2 className='text-center'>Cupping (Myofascial decompression MFD)</h2>
        <div className='linec'></div>
        <div className='acup mt-3'>
          <p>Cupping has been around for centuries, it’s origin is from China and middle east .We see many athletes using it for pain relief, muscle relaxation along with their other conventional therapies. Also using cupping for skin disorders,respiratory issues, detox ,stress relief has its benefits .</p>
          <p>It involves placing cups at certain points on a person’s skin. A practitioner creates a suction in the cups, which pulls against the skin and for half an hour it remains on the skin</p>
          <p>Cupping typically leaves round cup shape bruises on a person’s skin, you must have seen many sports person, famous personalities having it on their skin. It looks little frightening but the process is painless.</p>
          <p><strong>If you want to learn more about how cupping can help you, naturally, contact us and we’ll be happy to explain every step of the process and schedule an appointment for you.</strong></p>
        </div>
      </section>
    </div>
  )
}

export default Cupping