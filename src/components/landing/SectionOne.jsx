import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import person from '../../assests/person.png'
import './index.css';
export default function SectionOne() {
  return (
        <section>
        <Container className='landing'>
          <Row>
              <Col lg="6" md="6">
              <div className="person">
                <img src={person} alt="person-img" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="landing__content">
                <p className="mb-4 landing__title">
                  <span>A new Prespective</span> <br/> 
                  <span> of Business Delivery</span>
                </p>

                <p className="landing__paragraph mb-1 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="main_btns mt-5">
                  <button className="info_btn">
                    MORE INFO
                  </button>

                </div>

                <div className="soical__media d-flex align-items-right gap-5 mt-5 justify-content-end">
                  <i class="ri-instagram-line ri-lg"></i>
                  <i class="ri-facebook-circle-line ri-lg"></i>
                  <i class="ri-twitter-fill ri-lg"></i>
                </div>
              </div>
            </Col>

            </Row>

        </Container>
      </section>
  )
}
