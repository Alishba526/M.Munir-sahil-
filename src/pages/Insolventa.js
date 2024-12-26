import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Insolventa = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>Advocate's Work in Karachi High Court</title>

          <meta
            name="description"
            content="Oferim servicii de consultanță și reprezentare în procedurile de insolvență, inclusiv lichidare judiciara, redactare de cereri de deschidere a procedurii de insolventa, analiză a societatilor debitoare, infiintare societati, recuperare de creante, consultanta juridica și asistenta în aplicarea și executarea reglementarilor legale."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">Legal Solutions</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              WE SOLVED EVERYTHING YOU NEED
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
            Expert legal solutions for all your needs. We are here to help you navigate the legal system and achieve the best outcomes. We invite you to schedule a consultation with our Legal Group so
              we may provide legal advice
               catered for your specific needs.
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>
                      Legal Representation: Representing clients in civil,
                      criminal, family, labor, and commercial cases. Advocating
                      on behalf of individuals, businesses, and organizations in
                      high-profile and complex matters.;
                    </li>
                    <br></br>
                    <li>
                      Drafting Legal Documents: Preparing petitions, appeals,
                      writs, and other legal documents for cases filed in the
                      High Court. Drafting contracts, agreements, and other
                      formal legal paperwork tailored to the client’s needs.
                    </li>
                    <br></br>
                    <li>
                      Litigation: Handling appeals from lower courts, such as
                      Sessions or Civil Courts, in both civil and criminal
                      matters. Filing constitutional petitions to address
                      violations of fundamental rights under the Constitution of
                      Pakistan.
                    </li>
                    <br></br>
                    <li>
                      Consultation and Legal Advice: Advising clients on various
                      legal matters, including family disputes, business
                      transactions, and property issues. Offering insights on
                      compliance with Pakistani laws and regulations to avoid
                      litigation..
                    </li>
                    <br></br>
                    <li>
                      Corporate and Commercial Law: Assisting in corporate cases
                      like shareholder disputes, mergers, and acquisitions.
                      Providing legal support for company registration,
                      intellectual property rights, and partnership agreements.
                    </li>
                    <br></br>
                    <li>
                      Family Law Matters: Handling sensitive cases like divorce,
                      child custody, maintenance, and inheritance disputes.
                      Representing clients in complex family disputes with a
                      focus on confidentiality and quick resolution.
                    </li>
                    <br></br>
                    <li>
                      Criminal Law:
                      <br></br>Notification, Somatii de plata, Cerere cu valoare
                      redusa
                      <br></br>Filing bail applications and handling trial and
                      appellate proceedings.
                      <br></br>
                    </li>
                    <br></br>
                    <li>
                      Enforcement of Rights: Advocating for human rights, labor
                      rights, and ensuring fair treatment of employees or
                      marginalized individuals.
                    </li>
                    <br></br>
                    <li>
                      High-Stakes Cases: Managing cases involving government
                      agencies, public interest litigation, or disputes related
                      to policy implementation.
                    </li>
                    <br></br>
                    <li>Handling appeals from lower courts in civil cases.</li>
                    <br></br>
                    <li>
                      Filing constitutional petitions to protect fundamental
                      rights under the Constitution of Pakistan.
                    </li>
                    <br></br>
                    <li>
                      Advising clients on complex legal issues related to
                      administrative decisions or government policies.
                    </li>
                    <br></br>
                    <li>
                      Filing bail applications and arguing for pre-arrest or
                      post-arrest bail.
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Cere o evaluare"
                  >
                    CONTACT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insolventa;
