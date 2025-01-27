import React from 'react'
import './Footer.scss'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="footer" id='footer'>
                        <div className="footer-content">

                            <div className="footer-content-left">
                                {/* <img className='logo' src={assets.logo} alt="" /> */}
                                <h1>rhs</h1>
                                <p>Hot meals delivered straight to your table. RHS — your choice for a delicious life!!</p>
                                <div className="footer-social-icons">
                                    <img src={assets.facebook_icon} alt="" />
                                    <img src={assets.twitter_icon} alt="" />
                                    <img src={assets.linkedin_icon} alt="" />
                                </div>
                            </div>

                            <div className="footer-content-center">
                                <h2>Company</h2>
                                <ul>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Delivery</li>
                                    <li>Privecy Policy</li>
                                </ul>
                            </div>

                            <div className="footer-content-right">
                                    <h2>Get in touch</h2>
                                    <ul>
                                        <li>+20-008-31-03</li>
                                        <li>Contact @rhs.com</li>
                                    </ul>
                            </div>
                        </div>
                        <hr />
                        <p className='footer-copyright'>
                            © rhs.com 2025 Food Delivery- all rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
