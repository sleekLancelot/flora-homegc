import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/cover.png';

import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';


const Nav = () => {
    const [navScroll, setNavScroll] = useState(false)

    let button = useRef('button')
    let Nav = useRef('Nav')

    const onScroll = () => {
        if (window.pageYOffset > 100 && Nav.current) {
            setNavScroll(() => true)
        } else if (window.pageYOffset < 100 && Nav.current) {
            setNavScroll(() => false)
        }
        // console.log(document.scrollingElement.scrollTop)

        // document.removeEventListener('scroll', onScroll)
    }

    document.addEventListener('scroll', onScroll)

    const onClick = (e) => {
        if (button.current.ariaExpanded) {
            document.body.classList.toggle('noverflow')
        }
    }

    const showModal = () => {
        const open = document.getElementById('open');
        const modal = document.getElementById('modal');

        // Show modal
        open.addEventListener('click', () => modal.classList.add('show-modal'));

    }

    return (
        <div className='beginning'>
            <nav ref={Nav} className={`navbar navbar-expand-lg navbar-dark sticky-top ${navScroll ? 'shadow' : 'inherit'}`}>
                <div>
                    <Link className="navbar-brand" to="/">
                        <img style={{ width: '150px', height: '100px' }} src={logo} alt="logo" />
                    </Link>
                </div>

                <button ref={button} onClick={onClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#noWhere">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#noWhere">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#noWhere" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#noWhere">Finished</a>
                                <a className="dropdown-item" href="#noWhere">End user action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#noWhere">Done for you</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#noWhere" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Our Estate
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#noWhere">Hive</a>
                                <a className="dropdown-item" href="#noWhere">Paper Town</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#noWhere">Long Island</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#noWhere">Subscription</a>
                        </li>
                    </ul>

                    <div className="search-box-btn" id='open' onClick={showModal}>
                        <span className="fa fa-search fa-2x"></span>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="button" className="custom-btn btn btn-lg">Register/Login</button>
                    </div>
                </div>
            </nav>
            {/* nav end */}

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval='2500'>
                <div className="carousel-inner">
                    <div className="auto-container">
                        <div className="carousel-item active">
                            <div>
                                <HeadShake>
                                    <h2>Welcome</h2>
                                </HeadShake>
                                <Fade bottom>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt hic, odio magni facilis aut fugiat, illum sunt sapiente unde harum porro saepe optio quia temporibus eos molestias delectus accusamus nam nostrum esse libero commodi est dolores. Porro rem aliquam cumque cupiditate praesentium repellat? Nesciunt, neque? Iusto voluptate laboriosam numquam?
                                </p>
                                    <button type="button" className="custom-btn btn btn-lg">Our Services</button>
                                </Fade>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <HeadShake>
                                    <h2>Your one stop</h2>
                                </HeadShake>
                                <Fade bottom>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt hic, odio magni facilis aut fugiat, illum sunt sapiente unde harum porro saepe optio quia temporibus eos molestias delectus accusamus nam nostrum esse libero commodi est dolores. Porro rem aliquam cumque cupiditate praesentium repellat? Nesciunt, neque? Iusto voluptate laboriosam numquam?
                                </p>
                                    <button type="button" className="custom-btn btn btn-lg">Our Services</button>
                                </Fade>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <HeadShake>
                                    <h2>Your favorite spot</h2>
                                </HeadShake>
                                <Fade bottom>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nesciunt hic, odio magni facilis aut fugiat, illum sunt sapiente unde harum porro saepe optio quia temporibus eos molestias delectus accusamus nam nostrum esse libero commodi est dolores. Porro rem aliquam cumque cupiditate praesentium repellat? Nesciunt, neque? Iusto voluptate laboriosam numquam?
                                </p>
                                    <button type="button" className="custom-btn btn btn-lg">Our Services</button>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev control" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next control" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Nav;
