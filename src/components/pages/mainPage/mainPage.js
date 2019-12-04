import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./mainpage.css";
import beansLogo from "./Beans_logo.svg";

import Header from "../../header";
import AboutUs from "../../staticElements/aboutUs";
import BestItems from "../../bestsellers/best";

const MainPage = () => {
  return (
    <>
      <div className="preview">
        <Container>
          <Row>
            <Col lg="6">
              <Header />
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <h1 className="title-big">Everything You Love About Coffee</h1>
              <img className="beanslogo" src={beansLogo} alt="Beans logo" />
              <div className="preview__subtitle">
                We makes every day full of energy and taste
              </div>
              <div className="preview__subtitle">Want to try our beans?</div>
              <a href="#" className="preview__btn">
                More
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutUs />

      <section className="best">
        <Container>
          <div className="title">Our best</div>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <div className="best__wrapper">
                <BestItems />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainPage;
