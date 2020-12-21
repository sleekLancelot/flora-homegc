import React, { useState } from 'react'
import partner from '../assets/partn.png';
import bmw from '../assets/bmw-logo.jpg';
import mock from '../assets/app-mockup.png';
import sawo from '../assets/saworoide-michael-bello.jpg';
import cardImg1 from '../assets/4 node ARPA network.jpg';
import cardImg12 from '../assets/nuerological levels.jpg';
import cardImg3 from '../assets/stale meme.jfif';
import profileIcon from '../assets/profileIcon.png';

import { SliderData as slides } from './sliderData';

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';

const Home = () => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    setTimeout(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='newP'>
            <div className="img">
                <img id='firstP' src={partner} alt="partners" />
            </div>

            <div className="container con1">
                <div className="row">
                    <div className="col-sm">
                        <Fade left>
                            <img style={{ width: '300px', height: '360px' }} id='bmw' src={bmw} alt="" />
                        </Fade>
                    </div>
                    <div className="col-sm">
                        <h4>Perfect place to be</h4>
                        <h2>YOUR FAV SPOT</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam doloremque, architecto voluptate explicabo officia recusandae pariatur harum ducimus unde. Quas harum quod minima tenetur officiis aspernatur quis quisquam fugiat magnam commodi omnis ipsa autem, cumque quasi dolor recusandae praesentium in ducimus temporibus sed. Rem quisquam non pariatur ea deserunt.
                            Et suscipit voluptatem pariatur, necessitatibus quas id, quo consectetur, sed cum rerum tempore placeat nam dolor. Aut voluptate ullam non atque ducimus, quisquam fugit tempore vel tenetur rerum distinctio natus saepe ex iste nam libero aliquid illum! Totam sapiente perspiciatis, quam inventore animi ipsam est nihil eaque placeat. Perferendis, voluptates.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid con2">
                <div className="row">
                    <div className="col-sm">
                        <Fade bottom>
                            <img src={mock} alt="mock" />
                        </Fade>
                    </div>
                    <div className="col-sm col2">
                        <h3>NEVER MAKE THE MISTAKE OF INVESTING YOR TIME WRONGLY</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut accusantium, odio optio similique itaque laborum quod delectus quae incidunt sequi.</p>
                        <button type="button" className="custom-btn btn btn-lg">Access Now</button>
                    </div>
                </div>
            </div>

            {/* first cards */}
            <div className="con3">
                <div className='text-center'>
                    <h4>Products</h4>
                    <h2>Services we render</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <Pulse>
                            <div className="col-sm">
                                <div className='svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                                        <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </div>

                                <div className='word'>
                                    <h4>Verification Service</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, temporibus enim. Explicabo temporibus minus atque accusamus, natus sint eos, eaque ad illo numquam a laudantium nam ullam dolorum, hic totam!
                                </p>
                                </div>

                                <div className="chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="col-sm">
                                <div className="svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    </svg>
                                </div>

                                <div className='word'>
                                    <h4>Complete Property Buyer Services</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores consequuntur ex a, ea commodi magnam libero at odio est. Porro sed eos ad amet nulla quos sit, voluptate quae velit!
                                </p>
                                </div>

                                <div className="chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                        </Pulse>
                    </div>

                    <button type="button" className="custom-btn btn btn-lg">Access Now</button>

                </div>
            </div>

            <div className="sec2">
                <h2>WHERE WE AT</h2>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe id="inlineFrameExample"
                        title="Inline Frame Example"
                        loading='lazy'
                        className="embed-responsive-item"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="sec3">

                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <RubberBand>
                                <h4>PURPOSE</h4>
                                <h2>our promise to you</h2>
                            </RubberBand>
                            <Slide left>
                                <ul>
                                    <li className='noB'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio est non rerum quaerat reprehenderit!</li>
                                    <li className='noB'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio est non rerum quaerat reprehenderit!</li>
                                    <li className='noB'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae optio est non rerum quaerat reprehenderit!</li>
                                </ul>
                            </Slide>
                        </div>
                        <div className="col-sm">
                            <div className="clipBorder">
                                <img src={sawo} alt="sawo" />
                            </div>
                        </div>
                    </div>

                    <button type="button" className="custom-btn btn btn-lg">Learn More...</button>

                </div>
            </div>

            <div className="sec4">

                <div className="testTile text-center">
                    <RubberBand>
                        <h4>TESTIMONIAL</h4>
                        <h2>What They Say About Us</h2>
                    </RubberBand>
                </div>

                <section className='slider'>
                    <i className='fa fa-chevron-left' onClick={prevSlide} />
                    <i className='fa fa-chevron-right' onClick={nextSlide} />
                    {slides.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <div className="slid">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-chat-left-quote" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path fillRule="evenodd" d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                                        </svg>
                                        <p className='statement'>{slide.p}</p>
                                        <p id='name'>{slide.name}</p>
                                        <p>
                                            {
                                                slide.rating.map((r, index) => {
                                                    return (
                                                        <i key={index} className="fa fa-star" aria-hidden="true"></i>
                                                    )
                                                })
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </section>
            </div>

            <div className="sec5">
                <div className="text-center">
                    <h4>BLOGS</h4>
                    <h2>Eye Opening Content</h2>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <img id='sec5Img' className="card-img-top" src={cardImg1} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <p>
                                    <img style={{ marginRight: '10px' }} src={profileIcon} alt="" />
                                        Dona Admin
                                        </p>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                            <button type="button" className="custom-btn btn btn-lg">Read More...</button>
                        </div>
                    </div>
                    <div className="card">
                        <img id='sec5Img' className="card-img-top" src={cardImg12} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <p>
                                    <img style={{ marginRight: '19px' }} src={profileIcon} alt="" />
                                        Dona HQ
                                        </p>
                                <small className="text-muted">Last updated 5 days ago</small>
                            </h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                            <button type="button" className="custom-btn btn btn-lg">Read More...</button>
                        </div>
                    </div>
                    <div className="card">
                        <img id='sec5Img' className="card-img-top" src={cardImg3} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">
                                <p>
                                    <img style={{ marginRight: '10px' }} src={profileIcon} alt="" />
                                        Dona User
                                        </p>
                                <small className="text-muted">Last updated a day ago</small>
                            </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                            <button type="button" className="custom-btn btn btn-lg">Read More...</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sec6">

            </div>

        </div>
    )
}

export default Home
