import React from "react";
import { Col, Row, Container } from "reactstrap";
import Banner from "../../staticElements/banner";
import AboutBeans from "../../staticElements/aboutBeans";
import "./coffee.css";

const CoffeePage = () => {
  return (
    <>
      <Banner />
      <div className="shop">
        <Container>
          <AboutBeans />
          <Row>
            <Col lg={{ size: 4, offset: 2 }}>
              <form action="#" className="shop__search">
                <label className="shop__search-label" htmlFor="filter">
                  Looking for
                </label>
                <input
                  id="filter"
                  type="text"
                  placeholder="start typing here..."
                  className="shop__search-input"
                />
              </form>
            </Col>
            <Col lg="4">
              <div className="shop__filter">
                <div className="shop__filter-label">Or filter</div>
                <div className="shop__filter-group">
                  <button className="shop__filter-btn">Brazil</button>
                  <button className="shop__filter-btn">Kenya</button>
                  <button className="shop__filter-btn">Columbia</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={{size:10, offset:1}}>
              <div className="shop__wrapper">
                <div className="shop__item">
                  <img
                    src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                    alt="coffee"
                  />
                  <div className="shop__item-title">Solimo Coffee Beans 2kg</div>
                  <div className="shop__item-country">Brazil</div>
                  <div className="shop__item-price">10.73$</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CoffeePage;
