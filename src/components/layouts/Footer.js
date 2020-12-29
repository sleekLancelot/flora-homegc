import React from 'react'
import logo from '../assets/FHGC weblogo.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';

import '../../Footer.css'

const Footer = () => {
    return (
        <footer id='main-footer'>
            <div className="presvg">
                <ul>
                    <li className='noB'>
                        <h3>Get In Touch</h3>
                    </li>
                    <li id='pre'>
                        <pre style={{ color: '#fff' }}>
                            Suite 6, U-Mudi Filling Station,
                            Lekki-Epe Express,
                            Ibeju-Lekki,
                            Lagos.
                    </pre>
                    </li>
                    <li>Mon - Sat: 09:00am - 5:00pm</li>
                    <li>+234 809 444 2019</li>
                    <li>
                        <a className='mail' href="mailto: hello.florahomesgc@gmail.com" style={{ color: 'white' }}>hello.florahomesgc@gmail.com</a>
                    </li>
                </ul>
                <ul>
                    <li className='noB'>
                        <h3>Company</h3>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blogs</li>
                    <li>Terms And Conditions</li>
                </ul>
                <ul>
                    <li className='noB'>
                        <h3>Partners</h3>
                    </li>
                    <li>Nigeria Police Force</li>
                    <li>Lagos Court</li>
                </ul>
                <div>
                    <img id='footer-logo' src={logo} alt="Crimistry" style={{ width: '100px', height: '50px' }} />

                    {/* <div>
                        <p>
                            The foremost online property verification and Real Estate investment company that helps clients to acquire verified properties and invest in verified deals.
                    </p>
                    </div> */}

                    <div className="socials">
                        <img src={insta} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e1f36" fillOpacity="0.4" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </footer>
    )
}

export default Footer