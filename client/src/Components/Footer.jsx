import React from 'react';
import logo1 from '../images/logo1.png';

function Footer() {
  return (
    <section id='footer'>
        <div class='container footer-row'>
            <hr />
            <div class='footerleftcol'>
                <div class='footerlinks'>
                    <div class='linktitle'>
                        <h4>Product</h4>
                        <small>Our Plan</small><br />
                        <small>Free Trial</small>
                        <br />
                        <small>Eligibility</small><br />
                        <small>Our Motive</small>
                    </div>
                    <div class='linktitle'>
                        <h4>About Us</h4>
                        <small>Request Demo</small><br />
                        <small>FAQs</small>
                        <br />
                        <small>Stage 1</small>
                        <br />
                        <small>Stage 2</small>
                    </div>
                    <div class='linktitle'>
                        <h4>Support</h4>
                        <small>Features</small><br />
                        <small>Contact Us</small><br />
                        <small>Designers</small>
                        <br />
                        <small>Managers</small>
                    </div>
                    <div class='linktitle'>
                        <h4>Explore</h4>
                        <small>Find a nonprofit</small><br />
                        <small>Corporate Solution</small>
                        <br />
                        <small>Freelancing</small><br />
                        <small>Community</small>
                    </div>
                </div>
            </div>
            <div class='footerrightcol'>
                <div class='footerinfo'>
                    <div class='copyrighttext'>
                        <small>support@websitebuilder.com </small>
                        <br></br>
                        <small>Copyright 2023 websitebuilder</small>
                        <br></br>
                        <small>Created by github @shubhsharma023</small>
                    </div>
                    <div class='footerlogo'>
                        <img src= {logo1}/>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Footer;
