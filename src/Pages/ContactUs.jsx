import React from "react";
import image1 from "../asset/images/founder-img.png";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema=yup.object({
  Name:yup.string().required(),
  mobno: yup.string()
  .required("required")
  .matches(phoneRegExp, 'Phone number is not valid')
  .min(10, "too short")
  .max(10, "too long"),
  exampleFormControlTextarea1:yup.string().required("required")
})


function ContactUs() {

  const {handleSubmit,register,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });
  console.log(errors);
  const formsubmit=(data)=>{
    console.log(data)
  }



  return (
    <div>
      <section className="container py-3 py-md-3 px-0 mb-3">
        <div className="text-center conhead">
          <h2 class>Book An Appoinment: +91 99999 99999</h2>
        </div>
      </section>
      <section className="container py-3 py-md-3 mt-3">
        <div className="row">
          <div className="col-md-4">
            <img src={image1} className="img-fluid imagecont" alt="" />
            <h4 className="my-4">Ritika Anchlia</h4>
            <p className="fw-bold">
              If you have questions and want to know more about the services
              write to us-
            </p>
            <form onSubmit={handleSubmit(formsubmit)}>
            <div className="mb-3">
              <label for="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Full name"
                {...register("Name")}
              />
              {/* {errors.Name && <span>This field is required</span>} */}
              <div className="text-danger fs-8">
              {errors.Name?.message}
              </div>
              
            </div>
            <div className="mb-3">
              <label for="mobno" className="form-label">
                Contact no
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobno"
                placeholder="mobile no"
                {...register("mobno")}
              />
               <div className="text-danger fs-8">
              {errors.mobno?.message}
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                {...register("exampleFormControlTextarea1")}
              ></textarea>
               <div className="text-danger fs-8">
               {errors.exampleFormControlTextarea1?.message}
               </div>
              
            </div>
            <button className="btn btn-primary">submit</button>
            </form>
            <h4 className="mt-4 mb-0">Business Hours</h4>
            <div className="linec"></div>
            <div className="fs-5 mt-3">
            <p className="mb-2">Monday to Friday: 9.30am to 7.30pm</p>
            <p className="mb-2">Saturday- 9.30am to 2 pm</p>
            <p className="mb-2">Sunday and public holidays - Closed</p>
            </div>
            

          </div>
          <div className="col-md-8 intro">
            <h3 className="mb-4">Ritika Anchlia</h3>
            <div className="linecont mb-4"></div>
            <div className="row ">
              <div className="col-md-3 col-4">
                <p>Meet the founder:</p>
              </div>
              <div className="col-md-9 col-8">
                <p>Ritika Anchlia</p>
                <p>- MD(Acu)</p>
                <p>- Yoga Trainer Nutrition Coach (PN, NASM)</p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                She has been practicing holistic health sciences for various
                health issues related to gastrointestinal, musculoskeletal,
                respiratory, neurological and gynaecology department for over a
                decade now.
              </p>
              <p>
                She have a lot of success in treating people for general as well
                as chronic ailments through holistic approach by using
                Acupuncture, Yoga and Nutrition (food is medicine) and other
                amazing ancient therapies, in an integrative way. The
                fundamental is to see the body as a whole to find the root cause
                of any health concern. Every organ is interlinked and has an
                impact on physical, mental, emotional and eventually functional
                level. Our expertise lies in working on the root cause and not
                just treating the symptoms superficially.{" "}
              </p>
              <p>
                We provide holistic transformation through acupuncture, yoga,
                nutrition and lifestyle changes. We have a team of licensed and
                experienced practitioners for these services to bring a positive
                change and help live better. We practice therapies involved in
                holistic healing and are also lifestyle oriented. These can go
                along with your conventional medicine and in certain ailments
                can support your primary treatment. We are not against western
                medicine-Allopathy. Medicine is useful, effective for many
                health conditions and emergencies where the immediate
                intervention is a must. She believe every science has its
                benefits and limitations.
              </p>
              <p>
                We work with patients on the all the aspect of health at
                physio-psych-energy(Qi) level so that the transformation is
                whole. Every person is unique in terms of functioning on
                physical, emotional, mental plane and exists in totally
                different social environment so the treatment and healing plans
                should be unique to each. We focus on your wellness inside-out
                through various therapies and ancient traditional alternative
                sciences, so that nothing stands between you and your best
                functioning self.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
