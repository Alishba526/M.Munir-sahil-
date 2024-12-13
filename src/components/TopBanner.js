// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";

// const TopBanner = () => {
//   return (
//     <div className="banner w-100 py-2">
//       <div className="container">
//         <div className="row d-sm-flex flex-column flex-md-row justify-content-between align-items-center">
//           <div className="col col-md-4 col-sm-12 text-center mb-md-0">
//             <FontAwesomeIcon
//               icon={faLocationDot}
//               className="banner-icon pe-2"
//               size="1x"
//             />
//             karachi
//           </div>
//           <div className="col col-md-4 col-sm-12 text-center mb-md-0">
//             <FontAwesomeIcon
//               icon={faEnvelope}
//               className="banner-icon pe-2"
//               size="1x"
//             />
//           mmtiwanalegalservice@gmail.com
//           </div>
//           <div className="col col-md-4 col-sm-12 text-center">
//             <FontAwesomeIcon
//               icon={faPhone}
//               className="banner-icon phone-icon pe-2"
//               size="1x"
//             />{" "}
//           +923003124439  
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBanner;

































































import React from "react";

const TopBanner = () => {
  return (
    <div className="banner w-100 py-2">
      <div className="container">
        <div className="row d-sm-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Location */}
          <div className="col col-md-4 col-sm-12 text-center mb-md-0">
          <i className="fa-solid fa-location-dot pe-2"></i>
           
          <a
              href="https://www.google.co.in/maps/@24.8564838,67.0189138,17z?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              className="text-decoration-none"
            >
             karachi
            </a>





          </div>

          {/* Email */}
          <div className="col col-md-4 col-sm-12 text-center mb-md-0">
          <i class="fa-solid fa-envelope"></i>
            <a
              href="mailto:mmtiwanalegalservice@gmail.com"
              className="text-decoration-none"
            >
              mmtiwanalegalservice@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="col col-md-4 col-sm-12 text-center">
            <i className="fa-solid fa-phone pe-2"></i>
            <a href="tel:+923003124439" className="text-decoration-none">
              +923003124439
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="row justify-content-center mt-3">
          <div className="col text-center">
            <a
              href="https://www.linkedin.com/in/sahil-munir-tiwano-739019338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none mx-2"
            >
              <i className="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://youtu.be/rMvvQf7yb5U?si=B5EYgyBBgEeTC_rt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none mx-2"
            >
              <i className="fa-brands fa-youtube fa-2x"></i>
            </a>
            <a
              href="https://www.facebook.com/sahilmunir.tiwano57?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none mx-2"
            >
              <i className="fa-brands fa-facebook fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
