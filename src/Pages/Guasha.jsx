import React from 'react'
import image1 from "../asset/images/guasha12.jpg"
function Guasha() {
  return (
    <div>
      <section className='container-fluid pb-2 pb-md-2 px-0'>
          <img src={image1} className='img-fluid' alt="" />
      </section>
      <section className='container py-3 py-md-3'>
        <h1 className='text-center'>Guasha</h1>
        <div className='lineg'></div>
        <div className='acup mt-4'>
          <p>Its an eastern traditional medication therapy,guasha can be applied in today’s time as research proves its effective:</p>
          <ul>
            <li>Reduce fever</li>
            <li>Treat heat stroke/sun stroke</li>
            <li>Cold,cough,asthma and bronchitis</li>
            <li>Relieves muscles tension and tendon injuries</li>
            <li>Improves blood circulation</li>
            <li>Cure headaches</li>
            <li>Treat fatigue</li>
            <li>Cure urinary and gynaecological disorders</li>
          </ul>
          <p>Skin rejunivation :promotes new skin cell growth, controls acne, reduces acne marks, reduces clogged pores, ironing out fine lines, removing eye bags, tightening face and reduces fatigue and insomnia.</p>
          <p>For facial massages :its very effective because consistent strokes are applied using specially designed gua sha board along with the channels and acupuncture points.it helps in combating pigmentation ,dark circles as it simulates blood circulation,promotes movement of Qi,restores normal metabolic process.</p>
          <p>If any health ailments first check with your doctor before using guasha.</p>
        </div>
      </section>
    </div>
  )
}

export default Guasha