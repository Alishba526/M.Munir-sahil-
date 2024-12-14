import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Acasa = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>lawyer</title>

          <meta
            name="description"
            content="Cabinetul nostru de Avocat și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice."
          />
        </Helmet>

        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3 mb-">
                  {" "}
                  TIWNA & TIWNA LEGAL GROUP 
                  <div className="ab">
                    <h2>M.Munir Tiwno <span> (Sahil)</span></h2>
                    <h2>
                      {" "}
                    
                    </h2>
                    <h3> Advocate High Court</h3>
                  </div>
                  <br></br>
                </div>

                <div className="text-2 fs-4">
                  <span className="fw-bold">
                    <br></br>{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-black ">
                  <p className="color-green"></p>
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Programare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Program
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Cere o evaluare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      CONTACT
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/informatii-utile">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Onorarii"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      SKILLS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Programare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Program
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Cere o evaluare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Cere o evaluare
                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Onorarii"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  SKILLS
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* TE CONFRUNTI CU O PROBLEMA=========

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">
                INTRODUCTION
                </h5>

                <p className="text-separator fw-normal">
                Sindh High Court is the highest judicial institution of Sindh, Sindh High Court, located in Karachi, the capital of Sindh Province. The High Court of Sindh was established on 1st December, 1976. The Sindh Highcourt is currently composed ten judges including the Chief Justice. The chief justice is the chief judge of the Sindh High Court. Mr. Justice Muhammad Shafi Siddiqui is the current chief Justice of SHC Karachi.
                  <br />
                  <span className="ms-4"></span> (((The SHC is performing its basic functions of enforcement of fundamental rights along with fair and just adjudication of public and private litigation. Sindh High Court is located at Saddar & Sindh Secretariat, Karachi, Pakistan. High Court of Sindh have benches in Sukkur,  circuit court Larkana and circuit court Hyderabad.)))
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/2.jpg"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/*TE CONFRUNTI CU O PROBLEMA========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">INTRODUCTION</h5>

                <p className="text-separator fw-normal">
                  TIWNA & TIWNA LEGAL, We are a professional law
                  corporation that is redefining the traditional law firm for
                  the new national economy. In addition to providing the
                  high-quality and efficient legal services our clients demand,
                  we offer unique knowledge and specialized guidance designed to
                  propel our clients to the forefront of the country's rapidly
                  evolving national marketplace. We invite you to schedule a
                  consultation with our company so we may provide legal advice
                  catered for your specific needs. Our experience extends beyond
                  national trade law and each client receives the expertise our
                  attorneys have in other areas of the law such as criminal law,
                  family law, civil law, employment law, and intellectual
                  property law. Our quality advice, professionalism and high
                  standard of care ensures that you are in good hands, but we
                  implore you to schedule your appointment to experience our
                  services first hand.
                  <br />
                  <span className="ms-4"></span> (((.)))
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div
                id="imageCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/assets/2.jpg"
                      className="intro-img img-fluid d-block rounded-2"
                      alt="a gavel, scales of justice, and law books"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/5.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/6.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/12.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/11.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/13.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/14.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/15.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/16.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/7.jpg" // Add your second image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="courtroom image"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src="/assets/8.jpg" // Add your third image here
                      className="intro-img img-fluid d-block rounded-2"
                      alt="court documents"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden" color="red">
                    Previous
                  </span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden" color="red">
                    Next
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICII========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">SERVICE</h6>

                  <h5 className="lh-base text-center pb-3">
                    THE HIGH COURT OF SINDH
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">HISTORY</h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/logo1.jpg"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="sigla barou Bucuresti"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        On 21 August 1926, the Sindh Courts Act (Bom. VII of
                        1926) was passed into law-making provision for the
                        establishment of a Chief Court for the Province of
                        Sindh. On the coming into operation of Part III of the
                        Government of India Act, 1935, on 1 April 1937, Sindh
                        became a separate Province and the Judges of the Court
                        of Judicial Commissioner of Sindh were appointed by
                        Royal Warrant by the British Government.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/avocatura">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            HISTORY
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">HISTORY</h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/logo2.jpg"
                          className="unpir img-fluid mx-auto d-block rounded-2"
                          alt="sigla unpir"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        At the time of establishment of the High Court of West
                        Pakistan the number of the Judges of the Karachi Bench
                        was almost the same but subsequently it was increased to
                        15 and on separation of Sindh & Balochistan High Court's
                        12 Judges were allocated to the Sindh High Court and 3
                        Judges to Balochistan High Court. The present approved
                        strength of Judges is 28. However, the number of Judges
                        appointed is 24.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolventa">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            HISTORY
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CINE SUNTEM */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4"> ABOUT </p>
                <h5 className="lh-base text-center pb-4">
                  TIWNA & TIWNA LEGAL GROUP
                </h5>

                <p className="text-separator fw-normal">
                  A distinguished legal practitioner and Managing
                  Partner/Director/Attorney at TIWNA & TIWNA LEGAL,
                  brings to the table a robust educational foundation from Sindh
                  Muslim Law College, where he earned his LL.B. This rigorous
                  academic training has equipped him with a comprehensive
                  understanding of legal principles and jurisprudence, laying
                  the groundwork for his successful career in the legal
                  profession. He embodies a strategic and adopt approach to
                  legal representation, welcoming clients with a vision of
                  sharp, strategic solutions tailored to their needs.
                  <br></br>
                  <span className="ms-4"></span>Mr. M. Munir TIWNA has vide
                  legal background and dealing with highlighted cases such as
                  Pakistan's historical, famous case of Muzamil Hussain Toori
                  (MHTOORI) the Pakistan's famous blogger, YouTuber,
                  Photographer Islamabad based against Pakistan Television
                  (PTV), Mr TIWNA won the case of 50 acres agricultural land in
                  favor of Hindu family against one of the approximately 35
                  years senior Advocate and 4 other cases of residenacial
                  property of Karachi on behalf of an old lady against her sons
                  who got her property fraudulently valued approximately 10
                  crors and many other prestigious high level cases.
                  <br></br> <span className="ms-4"></span> With a strong
                  advocacy skill set, he navigates the legal landscape with
                  finesse, persuading the bench with cogent arguments and a firm
                  grasp of the law. His ability to communicate complex legal
                  issues clearly before the courts is highly praised,
                  underpinned by his sharp presence of mind, high emotional
                  intelligence, and strong interpersonal skills. Mr M. Muneer
                  TIWNA has unique advantage lies in his adaptable and
                  innovative mindset, eschewing outdated solutions in favor of
                  pioneering approaches to address his clients' challenges.
                  Whether providing litigation representation, devising
                  strategies, or securing favorable outcomes across various
                  judicial forums, he consistently prioritizes the best
                  interests of his clients. Drawing from his experience at
                  prestigious law firms and his tenure with esteemed legal
                  luminaries such as Mr. Javed Ahmed Chhatari Advocate Supreme
                  Court of Pakistan and Ex Senior Civil Judge & Ex Deputy
                  Registrar Supreme Court of Pakistan Mr Munwar Ali TIWNA. Mr
                  M. Munir TIWNA possesses invaluable insights into navigating
                  high-stakes and complex matters with precision and detail.
                  Furthermore, Mr. M. Muneer TIWNA's corporate background,
                  including his first hand exposure to corporate structures at
                  Zenith Codes, sets him apart. He not only offers legal
                  expertise but also advises on governance structures, policies,
                  and risk mitigation strategies, ensuring comprehensive legal
                  coverage and security for corporations. In addition to his
                  professional achievements, Mr. M. Muneer TIWNA is an active
                  member of the legal community, holding memberships with the
                  Sindh Bar Council, the High Court Bar Association and the
                  Karachi Bar Association. These affiliations underscore his
                  commitment to excellence and ongoing professional development
                  within the legal field.
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/4.jpg"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*CE NE RECOMANDA========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">Our PRACTICE AREA</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center"></div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li> Intellectual property litigation .</li>
                <li> Intellectual Property Disputes .</li>
                <li> Civil rights litigation .</li>
                <li>Criminal defense litigation .</li>
                <li>Family Litigation.</li>
                <li>Legal consulting.</li>
                <li>Power of attorney .</li>
                <li>Landlord and tenant litigation .</li>
                <li>Property dispute litigation .</li>
                <li>Corporate litigation .</li>
                <li>Alternate Dispute Resolution .</li>
                <li>Business and Commercial Litigation .</li>
                <li>Civil Litigation .</li>
                <li>Company Law .</li>
                <li>Corporate Lawyer .</li>
                <li>Corporate Legal .</li>

                <li>M.MUNIR TIWNA</li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                {/* <div>10+</div>
                <div>ani de experienta</div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acasa;
