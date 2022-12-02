import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return(
    <div>
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Use With Confidences</h1>
          <ul>          <li>
            Use Code Kings to pay developers to work on projects that need
            completion. Or be the developer to work on the project to get paid.
            It is a win-win situation.
          </li>
        </ul>
        </div>
        <div className="col">
          <h1>Our Company</h1>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>For Developers</li>
            <li>Terms</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Send Email</li>
            <li>Code King Community</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Blog</li>
            <li>Updates</li>
            <li>Pantners</li>
            <li>eBooks</li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
    <footer className="foot">
      <p>Copyright © 2022 Code Kings - All rights Reserved</p>
    </footer>
    </div>
  )
};

export default Footer;