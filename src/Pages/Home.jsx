import React from "react";
import slide0 from "../asset/images/img-11.jpg";
import slide1 from "../asset/images/img-2.png";
import slide2 from "../asset/images/img-3.png";
import slide3 from "../asset/images/img-4.png";
import slide4 from "../asset/images/img-5.png";
import image6 from "../asset/images/image-6.png";
import { Link } from "react-router-dom";
import galery1 from "../asset/images/750Acupuncture-GettyImages-1251542995.jpg";
import gallery2 from "../asset/images/cos acu.jpg";
import gallery3 from "../asset/images/cupping.jpg";
import gallery4 from "../asset/images/funcational nutrition.jpg";
import gallery5 from "../asset/images/Gua Sha.png";
import gallery6 from "../asset/images/moxibustion-147320515_770x533-650x428.jpg";
import gallery7 from "../asset/images/pranayama-benefits.png";
import gallery8 from "../asset/images/yoga.jpg";
import image7 from "../asset/images/experience.png";
import image8 from "../asset/images/really-need.png";
import image9 from "../asset/images/yoga-therapy.png";
import image10 from "../asset/images/huma-body.png";
import "../App.css";

function Home() {
  return (
    <div>
      <div className="container-fluid p-0 py-3 py-md-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="/acupuncture">
                <img src={slide0} className="  img-fluid" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/yoga">
                <img src={slide1} className="  img-fluid" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/cosematic">
                <img src={slide2} className="  img-fluid" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/moxibustion">
                <img src={slide3} className=" img-fluid" alt="..." />
              </Link>
            </div>
            <div className="carousel-item">
              <Link to="/cupping">
                <img src={slide4} className="  img-fluid" alt="..." />
              </Link>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section className="container py-md-3 py-3 d-flex justify-content-start">
        <div id="subheading">
          <h2 className="sub_heder ">
            Experience Tapas{" "}
            <span className="sub_span text-black">
              {" "}
              Holistic Health Systems
            </span>
          </h2>
          <p className="sub_para">
            “Nothing stands between YOU and your best functioning SELF.”
          </p>
          <div className="line"></div>
        </div>
      </section>
      <section className="section2 container p-0 py-3 py-md-3">
        <div className="row gy-3">
          <div className="col-md-6 d-flex align-items-center">
            <img src={image6} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6  text-center ">
            <p className="sect_para">
              We work on the all the aspect of health at
              physio-psych-energy(Qi)meridians level so that the transformation
              is whole.We focus on your wellness inside-out through various
              therapies and ancient sciences, integratively.
            </p>
            <p className="sect_para">
              it’s important to look at ailments holistically for complete
              healing. Therefore, our prime focus is on the root cause of the
              ailment and not just the symptoms. As a result, you’ll experience
              a significant transformation on all related aspects of body, mind
              and energy systems.
            </p>
            <Link to="/aboutus">
              <button className="btnsect2">Know more</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="sect3 container-fluid p-0 py-3 py-md-3 ">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6 text-center text-white ">
              <h3>
                Sign up for our newsletters/blogs & stay up to date with the
                latest…
              </h3>
            </div>
            <div className="col-md-6 d-flex align-items-center text-center">
              <div className="row gy-3">
                <div className="col-md-4 col-12 ">
                  <input
                    id="sect3inpt"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    id="sect3inpt"
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    aria-label="E-mail"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <button className="sect3btn"> Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect4 container pt-4 pt-md-4  text-center">
        <div className="sect4div">
          <h2>
            Our <span className="sect4span">Services</span>{" "}
          </h2>
          <p className="sect4par">
            Are You Ready to meet a healthier you.....?
          </p>
          <div className="line2"></div>
          <p className="sect4par2">
            We customize an “ Integrative health plan” for you , utilizing all
            the required holistic therapies mentioned below as per three
            dimensions -body, mind, energy(Qi) constitution. Helping you reach
            your wellness goals.
          </p>
        </div>
      </section>
      <section className="sect5 container py-2 py-md-2">
        <div className="row gy-3 py-3">
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={galery1} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Acupuncture</p>
                <Link to="/acupuncture">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery2} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Cosematic Acpuncture</p>
                <Link to="/cosematic">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery3} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Cupping</p>
                <Link to="/cupping">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery4} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Functional Nutrition</p>
                <Link to="/functional">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-3">
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery5} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Guasha</p>
                <Link to="/guasha">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery6} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Moxibustion</p>
                <Link to="/moxibustion">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery7} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Pranayama</p>
                <Link to="/pranayama">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="hover">
              <div>
                <img src={gallery8} className="img-fluid" alt="" />
              </div>
              <div className="overlay">
                <p className="mb-0 parap  ">Yoga</p>
                <Link to="/yoga">
                  <button className="btn  text-white btn-sm " id="btnc">
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect6 container-fluid py-4 py-md-4 p-0">
        <img src={image7} className="img-fluid" alt="" />
      </section>
      <section className="sect7 container py-3 py-md-3 ">
        <div className="sect7div text-center">
          <h1>What you really need to know?</h1>
          <h3 className="sect7h3">How Acupuncture Works ?</h3>
          <p className="sect7par">
            Very important objective effects produced by Acupuncture:
          </p>
        </div>
      </section>
      <section className="sect7 container py-3 py-md-3">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h3 className="py-2 text-center sect8h3 ">Improving Immunity</h3>
              <p className="sect8par">
                Body’s resistant power of body is increased by acupuncture by
                increase of leucocytosis ,antibodies, gamma globulins etc. Thats
                why acupuncture is very effective in treating infections also in
                the cases of resistance or hypersensitivity to antibiotics or
                where antibiotics have failed or given serios side effects .Also
                prolonged use of antibiotics can be reduced with concurrent use
                of Acupuncture.
              </p>
            </div>
            <div>
              <h3 className="py-2 text-center sect8h3 ">
                Analgesic(Pain relief)
              </h3>
              <p className="sect8par">
                Selected points give pain relief from tooth ache,back pain,
                headache, arthritis pain,injury, nerve pain and other similar
                pain disorders .Secretion of endorphis, serotonin is involved in
                acupuncture analgesia .Opiate and non opiate neuro-transmitters
                ,hormonal mechanisms are involved in pain relief with
                Acupuncture.
              </p>
            </div>
            <div>
              <h3 className="py-2 text-center sect8h3 ">
                Psychological Effect
              </h3>
              <p className="sect8par">
                Calming and tranquilizing effect of acupuncture .Measurable
                effects have been reported in the metabolic activity of brain
                tissue.eg-there is an increase of Dopamine content of the brain
                after acupuncture that’s why it is very effective in treating in
                certain mental disorders like Parkinson’s where depletion of
                dopamine content in brain.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center ">
            <img src={image8} className="img-fluid" alt="" />
          </div>
          <div className="col-md-4">
            <div>
              <h3 className="py-2 text-center sect8h3 ">Sedation</h3>
              <p className="sect8par">
                Needling of certain points results in sedation. its shown that
                during acupuncture there is a decrease in delta and theta wave
                activity on the electro-encephalogram. thats why its effective
                in treating insomnia,anxiety ,epilepsy, addictions, behavioural
                mental disorders.
              </p>
            </div>
            <div>
              <h3 className="py-2 text-center sect8h3 ">
                Motor recovery(Brain)
              </h3>
              <p className="sect8par">
                Acupuncture hastens the motor recovery in cases who have become
                paralysed .late cases of motor failure also responds well to
                acupuncture despite failure of other forms of therapies.to know
                more about this check-(motor gate theory :Jayasuriya and
                Fernando ,paper represented at the fifth world congress on
                acupuncture,Tokyo,1977)
              </p>
            </div>
            <div>
              <h3 className="py-2 text-center sect8h3 ">Homeostatic Effect</h3>
              <p className="sect8par">
                Restoring the original state of equilibrium by affecting the
                parasympathetic and sympathetic nervous system and endocrine
                system.these systems are disturbed in many ailments so use of
                acupuncture helps bringing the internal balance and treating
                these disorders.Acupuncture activates many of the body’s Self
                Healing Mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect9 container-fluid py-3 py-md-3 px-4 ">
        <div className="row gy-3">
          <div className="col-md-8">
            <p className="sect9par text-white ms-2 mb-0">
              Your journey towards transforming health starts here. connect with
              TAPAS team of experts to get a highly customized “Integrative
              Health Plan”
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Link to="/contactus">
              <button className="sect9btn">Schedule an appointment</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="sect10 container py-3 py-md-3">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="sect10h2">
              Therapeutic <span className="sect10span">Yoga</span>{" "}
            </h1>
            <h4>
              Yoga is the journey of the self, to the self, through the self.
            </h4>
            <div className="linesect10"></div>
          </div>
        </div>
      </section>
      <section className="sect11 container py-3 py-md-3">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={image9} className="img-fluid" alt="" />
            <div className="sect11div">
              <p>
                We apply different practices of yoga to help alleviate health
                conditions and promote holistic wellbeing.These conditions can
                range from physical ailments to mental emotional stress.The
                yogic therapeutic program includes practices of different
                Asana,Pranayama techniques,Kriya ,Dhyana(Meditation), Yoga Nidra
                (A practice of deep relaxation) to bring back balance in the
                system.
              </p>
              <p>
                Our therapeutic yoga specialist can pull from all forms of yoga
                and a broad spectrum of yoga pose to design a program that fits
                best for your needs.Our trust is through these teachings you
                will find more ease in your body, tranquil mind, and greater
                levels of energy and well-being.
              </p>
              <p>
                We have different therapeutic yoga programs to help to ease
                conditions like arthritis, back pain, neck pain,muscular
                issues,insomnia,sciatica,all types of headaches,gastrointestinal
                issues, weight gain ,hormonal imbalance-thyroid conditions,
                mental issues like depression, anxiety also pre and postnatal
                yogic care.these are just to name the few ,please consult for
                your needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect3 container-fluid p-0 py-3 py-md-3 ">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-6 text-center text-white ">
              <h3>
                Sign up for our newsletters/blogs & stay up to date with the
                latest…
              </h3>
            </div>
            <div className="col-md-6 d-flex align-items-center text-center">
              <div className="row gy-3">
                <div className="col-md-4 col-12 ">
                  <input
                    id="sect3inpt"
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    id="sect3inpt"
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                    aria-label="E-mail"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <button className="sect3btn"> Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect12 container py-4 py-md-4">
        <div className="text-center my-2">
          <h2>
            EFFECTS OF STRESS ON <span className="sect10span">HUMAN BODY</span>
          </h2>
          <div className="linesect10"></div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-md-4">
            <div>
              <h4 className="py-1 text-center sect8h3 ">Brain</h4>
              <p className="sect12par">
                Prolonged stress is the reason for depression, anxiety ,panic
                attacks, memory loss, mood swings ,insomnia ,mindfog.
              </p>
            </div>
            <div>
              <h4 className="py-1 text-center sect8h3 ">Respiratory System</h4>
              <p className="sect12par">
                Hormonal imbalance, menstrual disorders, fertility issues in
                women - low egg quality ,endometriosis and also in men like
                chronic stress can impair testosterone and sperm production and
                can cause impotence.
              </p>
            </div>
            <div>
              <h4 className="py-1 text-center sect8h3 ">
                Musculoskeletal system
              </h4>
              <p className="sect12par">
                Increased inflammation in musculoskeletal system, aches, tension
                ,muscle tightness ,more prone to injuries, muscular twitches and
                tics.
              </p>
            </div>
            <div>
              <h4 className="py-1 text-center sect8h3 ">Immune System</h4>
              <p className="sect12par">
                Due to chronic stress low immunity ,increased risk of falling
                sick frequently ,longer recovery time.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={image10} className="img-fluid" alt="" />
          </div>
          <div className="col-md-4">
            <div>
              <h4 className="py-1 text-center sect8h3 ">Skin & Hair</h4>
              <p className="sect12par">
                Stress is also the reason for skin issues like Eczema,
                psoriasis, delayed tissue repair, Acne and dull skin etc. Hair
                fall and baldness is very common in cases of severe stress.
              </p>
            </div>
            <div>
              <h4 className="py-1 text-center sect8h3 ">
                Cardiovascular system
              </h4>
              <p className="sect12par">
                Imbalance in blood pressure, increased rate of heart attack
                ,stroke and other heart related issues.
              </p>
            </div>
            <div>
              <h4 className="py-1 text-center sect8h3 ">Reproductive System</h4>
              <p className="sect12par">
                High level of stress adversely affects patients of asthma
                ,hyperventilation etc
              </p>
            </div>
            <div>
              <h4 className="py-1 text-center sect8h3 ">Respiratory System</h4>
              <p className="sect12par">
                Hormonal imbalance, menstrual disorders, fertility issues in
                women - low egg quality ,endometriosis and also in men like
                chronic stress can impair testosterone and sperm production and
                can cause impotence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sect9 container-fluid py-3 py-md-3 px-4 ">
        <div className="row gy-3">
          <div className="col-md-8">
            <p className="sect9par text-white ms-2 mb-0">
              Life is too short to feel stressed, in pain or fatigued, regain
              your vibrant health.
            </p>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Link to="/contactus">
              <button className="sect9btn">Schedule an appointment</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container-fluid pb-4" id="section-last">
        <h2 className="text-white text-center pt-5 ">Testimonials</h2>
        <div className="row gy-3 text-center mt-3">
          <div className="col-md-6">
            <div className="px-3">
              <div className="ratio ratio-16x9 ">
                <iframe
                  src="https://www.youtube.com/embed/unG8iv4NHgw"
                  title="YouTube video"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-3">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/TC5bcqBge1k"
                  title="YouTube video"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="btndiv text-center mt-4">
          <Link to="/Testimonials" className="btn btn-primary text-white">
            Know more
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
