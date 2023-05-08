import React from 'react'
import image1 from "../asset/images/acu_1.png"
import image2 from "../asset/images/acu_2.png"
import image3 from "../asset/images/acu_3.png"
import image4 from "../asset/images/acu_4.png"
import image5 from "../asset/images/acu_5.png"
import image6 from "../asset/images/acu_6.png"
import image7 from "../asset/images/acu_7.png"
import image8 from "../asset/images/acu_8.jpg"
import image9 from "../asset/images/acu_9.png"
import image10 from "../asset/images/acu_9.jpg"





function Acupuncture() {
  return (
    <div>
      <section className='acu1 container-fluid pb-2 pb-md-2 px-0'>
        <img src={image1} className="img-fluid" alt="" />
      </section>
      <section className='acu2 container py-3 py-md-3'>
        <h1 className="text-center fs-1 fw-bold">Acupuncture</h1>
        <div className='aculine'></div>
        <div className='acup'>
          <p className="text-center">Acupuncture is an ancient Chinese practice that’s been used for centuries to treat a wide variety of symptoms and illnesses.</p>
          <p>Clinical research has shown that acupuncture causes physical responses in nerve cells, the pituitary gland, and parts of the brain. These responses can cause the body to release proteins, hormones, and brain chemicals that control a number of body functions. It is proposed that, by these actions, acupuncture affects blood pressure, body temperature and the immune system. World Health Organisation approves the effectiveness of acupuncture in many diseases:</p>
        </div>
      </section>
      <section className='acup3 container shadow p-3 mb-5 bg-body rounded py-3 py-md-3'>
        <div className='row'>
          <div className='col-md-6 m-auto'>
            <h2>Gynaecology Disorders:</h2>
            <p className="acup">Amenorrhea, irregular menstruation due to hormonal imbalance, dysmenorrhea, menorrhagia-excess bleeding in period,pelvic inflammation, PCOS, PCOD etc. The understanding of the meridian and menstruation relationship directly offers guidance to acupuncture treatment of many gynaecological diseases. While some terms and theories of Traditional Chinese Medicine are complex, they are well established through its 4000 year history and through years of repeated clinical results.Research is now showing considerable progress with clinical trials and scientific studies proving the effectiveness of acupuncture on multiple fronts which were mystery earlier.</p>
          </div>
          <div className='col-md-6 '>
            <img src={image2} className="img-fluid"  alt="" />
          </div>
        </div>
        <p className='acup mt-4'>Acupuncture is widely used in a range of gynaecological and obstetric disorders. Acupuncture is popularly used as a supportive compliment medicine in IUI/IVF treatment .Acupuncture promotes relaxation in the body ,calms the nervous system so reduces anxiety and stress and helps you to go through the process with a better mind space and thus increasing the chances of IVF success .It increases the blood flow to uterus,support your primary treatment .Acupuncture helps in minimizing the side effects of IVF medicines like bloating,night sweats,headaches, breast tenderness ,stress etc.</p>
      </section>
      <section className='acup3 shadow p-3 mb-5 bg-body rounded container py-3 py-md-3'>
        <div className="row gy-3">
          <div className='col-md-6'>
            <img src={image3} className="img-fluid" alt="" />
          </div>
          <div className='col-md-6 m-auto'>
            <h2 className='mt-3'>Musculoskeletal Disorders:</h2>
            <p className='acup'>Musculoskeletal disorders (MSDs) can affect the body’s muscles, joints, tendons, ligaments and nerves.people suffer from arthritis,frozen shoulder,back pain,slip disc,carpel tunnel syndrome,fibromyalgia,tennis elbow etc.</p>
          </div>
          <h2 className='mt-3'>How it works:</h2>
          <p className='acup m-0'>Acupuncture is a somatosensory-guided mind-body-energy therapy that can tackle the multidimensional nature of pain.Clinical data shows that acupuncture can stimulate the production of endorphins (natural pain-killing hormones in the brain), and the anti-inflammatory hormone adrenocorticotropin. Acupuncture and TCM have helped thousands of people with health conditions having dramatic positive and life changing results because it triggers the body’s healing mechanism. that reduce pain and inflammation. Acupuncture can then be used on an ongoing basis to prevent re-occurrence.</p>
          <p className='acup'>In TCM, the condition that is congruent with arthritis is called "Bi syndrome." Bi syndrome manifests as pain, soreness, or numbness of muscles, tendons and joints, Acupuncture and herbal therapy help to open the blockage, balance the energy, and harmonize Qi and blood, eliminating pain, inflammation and greatly increasing mobility and range of motion in the joints.</p>
        </div>
      </section>
      <section className='acup4 shadow p-3 mb-5 bg-body rounded container py-3 py-md-3'>
        <div className='row gy-3'>
          <div className='col-md-6 m-auto'>
            <h2>Neurological disorders:</h2>
            <p className='acup'>Different type of headaches due to stress gastrointestinal issue / sinus related headaches, migraines ,epilepsy, Trigeminal neuralgia, nerve pain are the common painful conditions treated with acupuncture. Nerve pain can arise from trauma, inflammation, stroke, disease,infection, nerve degeneration, exposure to toxic chemicals, and nutrient deficiencies.</p>
          </div>
          <div className='col-md-6'>
            <img src={image4} className='img-fluid' alt="" />
          </div>
        </div>
      </section>
      <section className='acup5 shadow p-3 mb-5 bg-body rounded container py-3 py-md-3'>
         <div className='row gy-2'>
          <div className='col-md-6'>
            <img src={image5} className='img-fluid' alt="" />
          </div>
           <div className='col-md-6'>
            <h2 className='mt-3'>Gastrointestinal disorders:</h2>
            <p className='acup'>Irritable bowel syndrome (IBS) , constipation, diarrhea, ulsers etc. It refers to issues related to gastrointestinal tract- esophagus, stomach, small intestine, large intestine,rectum and the accessory organs of digestions, the liver, gallbladder.</p>
           </div>
         </div>
      </section>
      <section className='acup6 shadow p-3 mb-5 bg-body rounded container py-3 py-md-3'>
        <div className='row gy-3'>
          <div className='col-md-6'>
            <h2 className='mt-3'>Respiratory disorders:</h2>
            <p className='acup'>Very effective in the treatment of Asthma,Allegies,Cold,Flu etc</p>
          </div>
          <div className='col-md-6'>
            <img src={image6} className='img-fluid' alt="" />
          </div>
        </div>
      </section>
      <section className='acup7 shadow p-3 mb-5 bg-body rounded container py-3 py-md-3 '>
        <div className='row gy-3'>
          <div className='col-md-6'>
            <img src={image7} className='img-fluid' alt="" />
          </div>
          <div className='col-md-6'>
            <h2 className='mt-3'>Stress:</h2>
            <p className='acup'>Extensive research conducted around the world has shown enough evidence that acupuncture may significantly improve symptoms of stress-irritabitlity,anxiety,restlessness,insomnia etc.Acupuncture relieves stress by promoting movement of stagnant Qi(energy-chi) in the body, the stimulation of acupoints on the body promotes the release of ‘happy hormones,’ like endorphins and other natural chemicals that signal the body to relax by activating rest and digest’ action of parasympathetic nervous system and turning off the fight or flight response of our sympathetic nervous system.Acupuncture causes physical responses in nerve cells, the pituitary gland, and parts of the brain.</p>
          </div>
        </div>
      </section>
      <section className=' acup8 container py-3 py-md-3'>
        <h1 className='text-center'>Acupuncture Improves Memory & cognitive capacity</h1>
        <div className='lineacu8'></div>
      </section>
      <section className='acup9 container py-3 py-md-3'>
        <div className='row gy-3'>
          <div className='col-md-8'>
            <p className='acup mt-3'>Numerous studies suggest that acupuncture can help improve memory, mental clarity, concentration and cognitive function. It also helps in managing stress,anxiety, insomnia, forgetfulness and chronic restlessness.We at TAPAS can help optimize your brain power through a treatment approach that incorporates different modalities-Acupuncture,meditation,yoga and the right food to bring balance and sharpen the brain.</p>
          </div>
          <div className='col-md-4'>
            <img src={image8} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
      <section className='acup10 container py-3 py-md-3'>
        <h2>Cosmetic Acupuncture:</h2>
        <div className='row gy-3'>
          <div className='col-md-8'>
           <p className='acup'>Cosmetic Acupuncture: Every part of our body needs good blood circulation, moisture, removing stagnation of dampness. The Skin : when treating skin we not only focuses on the outer beautiful looking skin but also internal organs whose health is reflected on the skin. any obstruction in flow of Qi meaning energy imbalance in the body affects not just the organs but the skin too. It improve your skin appearance and restore a more youthful and inner natural glow. Its 100 percent safe and natural.</p>
          <p className='acup'>And the reason for remarkable results for skin comes as we treat not just the local area but the root cause for skin disorder. So cosmetic acupuncture can reduce fine lines and wrinkles, including ‘smile-lines’, ‘crows-feet’ around the eyes, and the common forehead lines.Also very effective in dealing with severe skin disorders like Acne Rosacea, psoriasis,hyperpigmentation, hyperhidrosis and works in cases hairloss, alopecia,Stress.</p>
          <p className='acup'>Stress is one of the major triggers for skin issues and accelerates skin aging. Research has made it clear that all types of stress accelerate dysfunction and breakdown of collagen, elastin and the results are an increase in fine-lines and early signs of aging.</p>
          </div>
          <div className='col-md-4 align-items-center d-flex'>
            <img src={image9} className='img-fluid' alt="" />
          </div>
        </div>
      </section>
      <section className='acup11 container py-3 py-md-3'>
        <div className='row gy-3'>
          <div className='col-md-8'>
            <h2>List of other disorders:</h2>
            <p className='acup'>Acupuncture can be integrated for treating health issues like:</p>
            <ul className='acup'>
              <li>Blood Pressure</li>
              <li>Vertigo</li>
              <li>Skin ailments</li>
              <li>Addiction-drug or Alcohol</li>
              <li>Vital Organs related</li>
              <li>Hormones related</li>
              <li>Obesity</li>
              <li>Paralysis</li>
              <li>Insomnia</li>
            </ul>
            <p className='acup'>can be helped through acupuncture along with your conventional therapy if required.</p>
          </div>
          <div className='col-md-4 d-flex align-items-center'>
          <img src={image10} className="img-fluid" alt="" />
        </div>
        </div>
      </section>
    </div>
  )
}

export default Acupuncture