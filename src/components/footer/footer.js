import React from 'react';

const Footer = (props) => (
    <div className='footer'>
        <div className="footerLogo">
            <a href="//dashboard.company-corp.com">
                <img src="https://s3-us-west-1.amazonaws.com/companycom-assets/company-footer-logo/footer-logo.png" 
                    srcSet="https://s3-us-west-1.amazonaws.com/companycom-assets/company-footer-logo/footer-logo@2x.png 2x, https://s3-us-west-1.amazonaws.com/companycom-assets/company-footer-logo/footer-logo@3x.png 3x" 
                    alt="Company.com" />
            </a>
        </div>
        <div className="copyRights">
            <span className="co-name">
                Company
                <span className="comColor">.com</span>
            </span>© 2018 All Rights Reserved
        </div>
        <div className="terms-use">
            <a href="https://webdev.company-corp.com/contact-us">Contact Us</a>
        </div>
        <div className="terms-use">
            <a href="https://webdev.company-corp.com/contact-us">Terms of Use</a>
        </div>
        <div className="terms-use">
            <a href="https://webdev.company-corp.com/contact-us">Privacy Policy</a>
        </div>
    </div>
);

export default Footer;
