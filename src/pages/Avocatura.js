import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
const Avocatura = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>Services the advocate</title>

          <meta
            name="description"
            content="Oferim consultanță juridică și asistență specializată într-o serie de arii de practică, inclusiv drept civil, penal, executare silită, dreptul familiei, dreptul muncii, dreptul comercial și societar."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">SERVICE THE ADVOCATE</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">TIWNA & TIWNA LEGAL GROUP</h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              "High Court Services: Expert Legal Representation and
              Consultation"
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2"> CIVIL LAW</h6>
                  <p className="card-text mx-1">
                    We provide legal consultancy services, assistance, and
                    representation in court hearings, and drafting of legal
                    petitions for filing in the court. We help you resolve your
                    legal issues quickly. Specifically tailored for Karachi High
                    Court.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">CRIMINAL LAW</h6>
                  <p className="card-text mx-1">
                    We provide legal assistance and representation before
                    investigative authorities and courts, drafting applications
                    and complaints against investigative measures and actions,
                    and preparing rehabilitation requests. Specifically tailored
                    for Karachi High Court.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">ENFORCEMENT OF JUDGMENTS</h6>
                  <p className="card-text mx-1">
                    In matters of enforcement of judgments, we provide services
                    regardless of your role in the procedure – whether you are a
                    debtor or a creditor. Inaction in such matters can have
                    serious consequences for both creditors and debtors.
                    Specifically tailored for Karachi High Court.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    FAMILY LAW - DIVORCE AND ASSET DIVISION
                  </h6>
                  <p className="card-text mx-1">
                    We provide legal assistance and representation in divorce
                    proceedings, asset division, child custody cases,
                    maintenance allowance, and visitation rights for minors.
                    Specifically tailored for Karachi High Court.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">LABOR LAW</h6>
                  <p className="card-text mx-1">
                    We provide professional legal services, including drafting
                    appeals against dismissal decisions, disciplinary sanction
                    decisions, compelling employers to pay wages and
                    salary-related rights, and offering legal opinions on labor
                    law matters. Specifically tailored for Karachi High Court.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    COMMERCIAL AND CORPORATE LAW
                  </h6>
                  <p className="card-text mx-1">
                    We offer services for the establishment of commercial
                    companies at the Registrar of Companies, change of
                    registered office, establishment/dissolution of branches,
                    drafting of constitutional documents, and resolutions of the
                    general assembly of shareholders. Specifically tailored for
                    Karachi High Court.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Consultation and Representation – Providing legal advice and
              handling court cases. Document Drafting – Preparing contracts,
              agreements, and legal notices. Family & Property Law – Resolving
              divorce, custody, and property disputes. Corporate & Tax Services
              – Managing business contracts and tax compliance. Debt Recovery –
              Recovering loans and outstanding payments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avocatura;
