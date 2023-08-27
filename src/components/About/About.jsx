// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import appLogo from "../../assets/images/AboutUsLogo.jpg";
// import banner from "../../assets/images/banner-3.jpg";
// import creator1 from "../../assets/images/creator-1.png";
// import creator2 from "../../assets/images/creator-2.png";
// import creator3 from "../../assets/images/creator-3.png";
// import creator4 from "../../assets/images/creator-4.png";
// import creator5 from "../../assets/images/creator-5.png";
// import './About.css';

// const About = () => {
//   return (
//     <>
//       <div className="position-relative" style={{ height: "300px" }}>
//         <img
//           src={banner}
//           alt=""
//           className=" h-100 w-100 object-fit-cover "
//           style={{ filter: "brightness(40%)" }}
//         />
//         <h2 className="fs-1 fw-bold text-white position-absolute top-50 start-50 translate-middle">
//           About Us
//         </h2>
//         <p
//           style={{ bottom: "25%" }}
//           className="fs-5 text-white position-absolute start-50 translate-middle-x"
//         >
//           From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!
//         </p>
//       </div>

//       <Container className="mission">
//         <Row className=" mx-5 my-5 ">
//           <Col className="me-5">
//             <h3 className="fs-1">Our mission</h3>
//             <p className="text-justify">
//               <span className="fst-italic fs-5 text-justify">
//                 "Our Mission at Sabzi Saga: Cultivating Healthier Lives through
//                 Fresh and Convenient Access to Nature's Finest Fruits and
//                 Vegetables."
//               </span>
//               <br />
//               This mission statement emphasizes the company's dedication to
//               providing a diverse selection of fresh produce through an
//               easy-to-use online platform. Sabzi Saga aims to make healthy food
//               choices more accessible to people, promoting a lifestyle centered
//               around well-being and nutrition. By connecting customers with a
//               wide range of fruits and vegetables from trusted vendors, the
//               platform seeks to contribute to a healthier and happier society.
//             </p>
//           </Col>
//           <Col>
//             <img src={appLogo} alt="logo" className="w-100 h-100 img-fluid" />
//           </Col>
//         </Row>


//       </Container>


//       <Container className="creators">
//         <h1 className="h-25 fs-1 fst-italic d-flex align-items-center justify-content-center">
//           Creators
//         </h1>

//         <Row style={{ height: "300px" }} className="m-5">
//           <Col className="h-100  d-flex justify-content-center flex-column bg-image hover-zoom">
//             <img
//               src={creator1}
//               alt=""
//               className="h-100 object-fit-cover rounded-circle"
//               style={{ backgroundColor: "#c4fa6f" }}
//             />
//             <h4 className="d-flex align-items-center justify-content-center">
//               Nikhil
//             </h4>
//           </Col>
//           <Col className="h-100  d-flex justify-content-center flex-column">
//             <img
//               src={creator2}
//               alt=""
//               className="h-100 object-fit-cover rounded-circle"
//               style={{ backgroundColor: "#c4fa6f" }}
//             />
//             <h4 className="d-flex align-items-center justify-content-center">
//               Arinjay
//             </h4>
//           </Col>
//           <Col className="h-100  d-flex justify-content-center flex-column">
//             <img
//               src={creator3}
//               alt=""
//               className="h-100  object-fit-cover rounded-circle"
//               style={{ backgroundColor: "#c4fa6f" }}
//             />
//             <h4 className="d-flex align-items-center justify-content-center">
//               Tanisha
//             </h4>
//           </Col>
//         </Row>

//         <Row
//           style={{ height: "300px" }}
//           className="m-5 d-flex align-items-center justify-content-around"
//         >
//           <Col className="h-100 ms-5 me-5 px-5 d-flex justify-content-center flex-column">
//             <img
//               src={creator4}
//               alt=""
//               className="h-100 object-fit-cover rounded-circle"
//               style={{ backgroundColor: "#c4fa6f" }}
//             />
//             <h4 className="d-flex align-items-center justify-content-center">
//               Priyanshu
//             </h4>
//           </Col>

//           <Col className="h-100 me-5 ms-5 px-5 d-flex justify-content-center flex-column">
//             <img
//               src={creator5}
//               alt=""
//               className="h-100 object-fit-cover rounded-circle"
//               style={{ backgroundColor: "#c4fa6f" }}
//             />
//             <h4 className="d-flex align-items-center justify-content-center">
//               Adesh
//             </h4>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default About;


import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './About.css'; // Make sure to include your CSS file for styling

import appLogo from "../../assets/images/AboutUsLogo.jpg";
import banner from "../../assets/images/banner-3.jpg";
import creator1 from "../../assets/images/creator-1.png";
import creator2 from "../../assets/images/creator-2.png";
import creator3 from "../../assets/images/creator-3.png";
import creator4 from "../../assets/images/creator-4.png";
import creator5 from "../../assets/images/creator-5.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="banner-section">
        <img src={banner} alt="" className="banner-image" />
        <div className="banner-content">
          <h2 className="page-title">About Us</h2>
          <p className="page-subtitle">
            From Farm to Fork: Savor Nature's Bounty with Sabzi Saga!
          </p>
        </div>
      </div>

      <Container className="mission-section">
        <Row className="mission-content">
          <Col lg={7} className="mission-text">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-description">
              <span className="mission-italic">
                "Our Mission at Sabzi Saga: Cultivating Healthier Lives through
                Fresh and Convenient Access to Nature's Finest Fruits and
                Vegetables."
              </span>
              This mission statement emphasizes the company's dedication to
              providing a diverse selection of fresh produce through an
              easy-to-use online platform. Sabzi Saga aims to make healthy food
              choices more accessible to people, promoting a lifestyle centered
              around well-being and nutrition. By connecting customers with a
              wide range of fruits and vegetables from trusted vendors, the
              platform seeks to contribute to a healthier and happier society.
            </p>
          </Col>
          <Col lg={5} className="mission-image">
            <img src={appLogo} alt="logo" className="logo-image" />
          </Col>
        </Row>
      </Container>

      <Container className="creators-section">
        <h1 className="creators-title">Creators</h1>

        <Row className="row-cols-1 row-cols-md-3 g-4">
          <Col className="col-md">
            <div className="creator-card bg-image hover-zoom">
              <img src={creator1} alt="Nikhil" className="creator-image" />
              <h4 className="creator-name">Nikhil</h4>
            </div>
          </Col>
          <Col className="col-md">
            <div className="creator-card bg-image hover-zoom">
              <img src={creator2} alt="Arinjay" className="creator-image" />
              <h4 className="creator-name">Arinjay</h4>
            </div>
          </Col>
          <Col className="col-md">
            <div className="creator-card bg-image hover-zoom">
              <img src={creator3} alt="Tanisha" className="creator-image" />
              <h4 className="creator-name">Tanisha</h4>
            </div>
          </Col>
          <Col className="col-md">
            <div className="creator-card bg-image hover-zoom">
              <img src={creator4} alt="Priyanshu" className="creator-image" />
              <h4 className="creator-name">Priyanshu</h4>
            </div>
          </Col>
          <Col className="col-md">
            <div className="creator-card bg-image hover-zoom">
              <img src={creator5} alt="Adesh" className="creator-image" />
              <h4 className="creator-name">Adesh</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
