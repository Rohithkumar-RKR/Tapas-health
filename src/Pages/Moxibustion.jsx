import React from 'react'
import image1  from "../asset/images/moxibustion.jpg"

function Moxibustion() {
  return (
    <div>
      <section className='container-fluid pb-2 pb-md-2 px-0'>
        <img src={image1} className='img-fluid' alt="" />
      </section>
      <section className='container py-3 py-md-3'>
        <h2 className='text-center'>Moxibustion</h2>
        <div className='linem'></div>
        <div className='acup mt-3'>
          <p>It is based on traditional Chinese medicine. Moxibustion can dredge meridians and regulate Qi- blood .Its a Chinese herb called Artemesia vulgris. It has been used to cure great range of diseases since 581 B.C. Earliest literature available on moxibustion from this time Era. A bibliometric analysis from 1954 to 2007 in china showed upto 364 kinds of diseases can be treated with moxibustion.</p>
          <p>It is categorized in direct moxibustion and indirect moxibustion while using. Moxibustion is closely related to meridian system ,cutaneous regions and acupoints .TCM states moxibustion has dual effect of tonification and purgation. through meridian system, moxibustion can reinforce insufficiency and reduce excessiveness and directly correct the disease state of the human body. moxibustion using moxa wool fire can warm the yang Qi and eliminate cold of the yin even it can melt the poisoning things caused by damp,wind,phlegm and so on.moxa can dredge the channels,remove pain,numbness, activate blood and Qi. Moxa wool is used to cure hundreds of diseases more for its therapeutic properties and long term clinical practices have proved that.</p>
        </div>
      </section>
    </div>
  )
}

export default Moxibustion