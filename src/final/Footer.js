import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Footer.css'

const  Footer = () => {

  return (
    <>
        <div className="bg-light text-center text-lg-start maxWidthClass">
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-sm-3">
                        <h6>CUSTOMER SERVICE</h6>
                            <p><a href="#">Contact US</a></p>
                            <p><a href="#">Help and Advice</a></p>
                            <p><a href="#">Shipping and Returns</a></p>
                            <p><a href="#">Refund Policy</a></p>
                    </div>

                    <div className="col-sm-3">
                        <h6>INFORMATION</h6>
                            <p><a href="#">About US</a></p>
                            <p><a href="#">Testimonials</a></p>
                            <p><a href="#">My Account</a></p>
                            <p><a href="#">Payments and Returns</a></p>
                    </div>

                    <div className="col-sm-3">
                        <h6>ABOUT US</h6>
                            <p><a href="#">Who We Are ?</a></p>
                            <p><a href="#">Corporate Responsibility</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                            <p><a href="#">Careers</a></p>
                    </div>

                    <div className="col-sm-3">
                        <h6>CONTACT US</h6>
                            <p><a href="#">(+612) 2531 5600</a></p>
                            <p><a href="#">greenbee@domain.com</a></p>
                            <p><a href="#">PO Box 1622 AB Street West</a></p>
                            <p><a href="#">Opening Hours : 8.00AM - 21.00AM</a></p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <p>Copyright © 2020 Vinovathemes. All rights reserved.</p>
            </div>
            <hr/>
        </div>
    </>
  );
}

export default Footer;
