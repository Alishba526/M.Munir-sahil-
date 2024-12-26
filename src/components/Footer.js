import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center py-4">
            {/* Logo Section */}
            <div className="col-md-4 ps-4 mx-auto text-center">
              <span className="">
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image me-1"
                  alt="scales of justice logo"
                  width="50"
                  height="50"
                />
              </span>
              <p className="content pt-3 px-3">
                Experience: 10 Years
                </p>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 text-center">
              <h6 className="pb-2">Contact</h6>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon"
                    title="mmTIWNAlegalservice@gmail.com"
                  />
                  <span className="fw-light px-2">
                  Mr. M. Munir Tiwna legalservice@gmail.com
                  </span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+923333284545"
                  />
                  <span className="px-2 fw-light">+923333284545</span>
                </span>
              </div>
              <div className="mt-3 d-flex align-items-center justify-content-center flex-column">
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="KARACHI"
                  />
                  <span className="px-2 fw-light">KARACHI</span>
                </span>
              </div>
            </div>

            {/* Program section */}
            <div className="col-md-4 text-center mt-4 mt-md-0">
              <div>
                <h6 className="pb-2">Program</h6>
                <p className="fw-light">
                  MONDAY + FRIDAY: 8AM – 5PM <br /> Mr. M. Munir Tiwna (SAHIL) –
                  ADVOCATE
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* WhatsAppWidget */}
        <div>
          <WhatsAppWidget
            phoneNo="+923333284545"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
            headerIcon="assets/LOGO2.png"
            headerTxtColor="white"
            headerBgColor="#02182b"
            headerTitle="MUNIR TIWNA (SAHIL) – ADVOCATE"
            headerCaption="ONSITE AND ONLINE"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={
              <>
                {/* Buna ziua, */}
                <br />
                <br />
              </>
            }
            footerBgColor="#999"
            btnBgColor="#c2b697"
            btnTxtColor="black"
          />
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">©2024 Mr. M. Munir Tiwna</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
