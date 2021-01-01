import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/FHGC weblogo.png';


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
        <nav ref={Nav} className={`navbar navbar-expand-lg sticky-top ${navScroll ? 'shadow' : 'inherit'}`}>
            <div id='logo'>
                <Link className="navbar-brand" to="/">
                    <img style={{ width: '150px' }} src={logo} alt="logo" />
                </Link>
            </div>

            {/* <button ref={button} onClick={onClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <button ref={button} onClick={onClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span role="button" ><i className="fa fa-bars" aria-hidden="true" style={{ color: '#541484' }}></i></span>
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

                            <a className="dropdown-item" href="#noWhere">Verification Service</a>
                            <a className="dropdown-item" href="#noWhere">Complete Property Buyer Service</a>
                            <a className="dropdown-item" href="#noWhere">Our Estates</a>
                            <a className="dropdown-item" href="#noWhere">Design Build & Manage</a>
                            <a className="dropdown-item" href="#noWhere">Done-For-You Investment</a>
                            <a className="dropdown-item" href="#noWhere">Advisory</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#noWhere">Sell My Property</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#noWhere" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Our Estate
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#noWhere">The Fern Island</a>
                            <a className="dropdown-item" href="#noWhere">The Hive</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#noWhere">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#noWhere">Subscription</a>
                    </li>
                </ul>

                <div className="search-box-btn" id='open' onClick={showModal}>
                    <span className="fa fa-search"></span>
                </div>

                <div className="d-flex justify-content-end">
                    <Link to='signUp' spy={true} smooth={true}>
                        <button type="button" className="custom-btn btn btn-lg">Register/Login</button>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Nav;
