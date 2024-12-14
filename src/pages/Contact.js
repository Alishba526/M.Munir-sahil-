import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>
        M.MUNIR TIWNA
        </title>
        
        <meta
          name="description"
          content="Contacteaza-ne pentru orice problema juridica cu care te confrunti. Oferim consultanta si reprezentare in diverse domenii legale. Locatie: Bucuresti, Program: Luni - Vineri: 9 - 17, E-mail: av_alinamarin@yahoo.com, Telefon: +40769 935 716."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACT</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>LOCATION:</h5>
                  <p>KARACHI</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Program:</h5>
                  <p>MONDAY TO FRIDAY: 8AM – 5PM</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>E-mail</h5>
                  <p>m m TIWNAlegalservice@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Telephone</h5>
                  <p>+923333284545</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  CONTACT
                </h5>
                <p>
                1. My Highlighted Case on behalf of Pakistan's famous blogger, YouTuber, Photographer Islamabad bases Muzamil Hussain Toor or as MHToori against Pakistan Television (PTV) channel.
                .{" "}
                </p>
                <p>
                2. Won the 5 cases on behalf of a mother against her sons fraudulently got the property valued 10 Crors.

                </p>
                <p>
                3. Won the case of 47 acres of agricultural land on behalf of the Helpless, innocent Hindu family namely Manro against Hindu influential people supported by the party Ministers
                </p>

                <p>4. And approximately hundreds of other cases.</p>
              </div>
            </div>
            <div className="col-sm-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
