import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import './Home.css'
const Home = (props) => {
    return (
        <Container className='home-container' id="home">
            <Row style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <Col xl={5} lg={6} xs={11}>
                    <div className='theme-heading'>Welcome To<br />
                        The Lord Society</div>
                    <p className='inner-text'>
                        <span> The Lord Society</span> is a collection of <span> 7777 Lords NFTs</span> living in the Ethereum blockchain.
                    </p>
                    <br />
                    <p className='inner-text mb-4'>

                        Each piece is <span> a unique 3D artwork </span> with a collection of more than <span> 150+ traits.</span> The objective is to build the strongest community and project around NFTs.
                    </p>
                    <a href='https://discord.com/invite/lordsociety' target="_blank" className='buy-btn join-us ' >JOIN US</a>

                </Col>
                <Col xl={5} lg={6}>
                    <Carousel controls={false} slide={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-img"
                                src="https://lordsocietynft.com/static/media/c2.8583ba13f8d921eadc1d.png"
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-img"
                                src="https://lordsocietynft.com/static/media/c3.fcb75f38f18bb00b9571.png"
                                alt="First slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;