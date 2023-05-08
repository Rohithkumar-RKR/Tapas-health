import React from 'react'
import image1 from "../asset/images/cosmetic_1.png"

function Cosematic() {
  return (
    <div>
      <section className='container-fluid p-0 pb-3 pb-md-3'>
        <img src={image1} className='img-fluid' alt="" />
      </section>
      <section className='container py-2 py-md-2'>
        <h2 className='text-center'>Cosmetic Acupuncture</h2>
        <div className='lineyo'></div>
        <div className='mt-4 acup'>
          <p>Every part of our body needs good blood circulation, moisture, removing stagnation of dampness. Cosmetic acupuncture is an ancient healing art that has been practiced in China for empresses as a beauty ritual for at least 5,000 thousand years.Acupuncture treatment, treating one part of the body does not happen in isolation. Acupuncture meridian pathways connects all body systems, organs, and parts and as a result It improve your skin appearance and restore a more youthful and inner natural glow.</p>
          <p>Cosmetic acupuncture is currently all the rage among Hollywood’s elite, and its popularity is understandable. It promises a more youthful appearance with, no aesthesia, no harmful chemicals or toxins injected ,no numbing of the facial muscles and no going under the knife. Its 100 percent safe and natural.</p>
          <p>And the reason for remarkable results for skin comes as we treat not just the local area but the root cause for skin disorder. So cosmetic acupuncture can reduce <strong>fine lines and wrinkles, including ‘smile-lines’, ‘crows-feet’ around the eyes, and the common forehead lines.Also very effective in dealing with severe skin disorders like Acne Rosacea, psoriasis,hyperpigmentation, hyperhidrosis and works in cases hairloss, alopecia,Stress .</strong> </p>
          <p>So Benefits of acupuncture may include :</p>
          <ul>
            <li>Improves collagen production and muscle tone</li>
            <li>Helps reduce under eye bags and skin sagging</li>
            <li>Reduce fine lines and wrinkles, including ‘smile-lines’, ‘crows-feet’ around the eyes, and the common forehead lines</li>
            <li>Firms the face skin</li>
            <li>Helps dark circles appear lighter</li>
            <li>Tightens pores .</li>
            <li>Increases local blood flow and lymph circulation</li>
            <li>Brightens complexion and eyes</li>
            <li>Through balancing hormones reduces Acne significantly.</li>
          </ul>
          <p>To give you a brief idea n initial course of treatments includes 3-4 sessions per week for 3 months.Every session lasts for 60 minutes. This process initiates the healing response and helps to balance the Qi. It is also recommended that you repeat a course of 2 sessions per week for 3 months every 1-2 years.Also it differs person to person so customized plan of treatment will be given after the consultation.</p>
        </div>
      </section>
    </div>
  )
}

export default Cosematic