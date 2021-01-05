import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import logo from '../assets/FHGC weblogo.png';


const Nav = () => {
    let location = useLocation()
    useEffect(() => {
        if (location.pathname.slice(1, location.pathname.length)) {
            setNotHome(() => true)
        } else {
            setNotHome(() => false)
        }
    }, [location.pathname])

    const [navScroll, setNavScroll] = useState(false)
    const [notHome, setNotHome] = useState(false)

    let button = useRef('button')
    let Nav = useRef('Nav')
    let NavUL = useRef('NavUL')

    const onScroll = () => {
        if (window.pageYOffset > 100 && Nav.current) {
            setNavScroll(() => true)
        } else if (window.pageYOffset < 100 && Nav.current) {
            setNavScroll(() => false)
        }
    }

    document.addEventListener('scroll', onScroll)

    const logoClick = (e) => {
        if (button.current.ariaExpanded) {

    // const onClick = (e) => {
    //     if (button.current.ariaExpanded) {
    //         document.body.classList.toggle('noverflow')
    //     }
    //     e.preventDefault()
    // }

    const unMountUL = (e) => {
        // eslint-disable-next-line eqeqeq
        if ((e.target.classList.contains('nav-link' || 'dropdown-item') && !e.target.id == 'dropdown-toggle') || e.target.id == 'logo' || button.current.ariaExpanded) {
            document.body.classList.remove('noverflow')
            NavUL.current.classList.remove('show');
        }
        e.preventDefault()
    }

    // const unMountUL = (e) => {
    //     // eslint-disable-next-line eqeqeq
    //     if ((e.target.classList.contains('nav-item' || 'dropdown-item') && !e.target.id == 'dropdown-toggle') || e.target.id == 'logo' || button.current.ariaExpanded) {
    //         document.body.classList.toggle('noverflow')
    //         NavUL.current.classList.remove('show');
    //     }
    //     e.preventDefault()
    // }

    const showModal = () => {
        const open = document.getElementById('open');
        const modal = document.getElementById('modal');

        // Show modal
        open.addEventListener('click', () => modal.classList.add('show-modal'));

    }

    return (

        <nav ref={Nav} className={`navbar navbar-expand-lg sticky-top ${navScroll ? 'shadow' : 'inherit'} ${notHome ? 'navColorBlack' : 'inherit'}`}>
            <div id='logo' onClick={logoClick}>

        <nav onClick={unMountUL} ref={Nav} className={`navbar navbar-expand-lg sticky-top ${navScroll ? 'shadow' : 'inherit'} ${notHome ? 'navColorBlack' : 'inherit'}`}>
            <div id='logo'>

                <Link className="navbar-brand" to="/">
                    <img style={{ width: '150px' }} src={logo} alt="logo" />
                </Link>
            </div>

            {/* <button ref={button} onClick={onClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <button ref={button} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span role="button" ><i className="fa fa-bars" aria-hidden="true" style={{ color: '#541484' }}></i></span>
            </button>

            <div ref={NavUL} className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className='navbar-nav mr-auto'>
                    <li className="nav-item active" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to='/product' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Product
        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Verification Service</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Complete Property Buyer Service</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Floracity</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Bulk And Purchase</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Design, Build And Manage</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Books</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Professional Advisory</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Investment Management</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">Sell My Property</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to='/#' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Our Estate
        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">The Fern Island</Link>
                            <Link className="dropdown-item" to='/#' data-toggle="collapse" data-target="#navbarSupportedContent">The Hive</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/blog' data-toggle="collapse" data-target="#navbarSupportedContent">Blog</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/login-register' data-toggle="collapse" data-target="#navbarSupportedContent">Register/Login</Link>

                    <li className="nav-item" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <Link className="nav-link" to='/login-register'>Register/Login</Link>

                    </li>
                </ul>

                <div className="search-box-btn" id='open' onClick={showModal}>
                    <span className="fa fa-search"></span>
                </div>

                <div className="d-flex justify-content-end">
                    <ScrollLink to='signUp' spy={true} smooth={true}>
                        <button type="button" className="custom-btn btn btn-lg">Register/Login</button>
                    </ScrollLink>

                </div>
            </div>
        </nav>
    )
}

export default Nav;
