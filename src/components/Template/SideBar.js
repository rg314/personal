import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ryan Greenhalgh</h2>
        <p><a href="mailto:ryan.greenhalgh@hotmail.co.uk">ryan.greenhalgh@hotmail.co.uk</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
      Ryan has expertise in software engineering and natural sciences. He has 2 years of commercial experience in cross-functional teams in machine learning and medical devices. Along with his commercial exposure, he has 4 years of academic research experience. He's worked on a number of projects including tissue engineering, biosensing, sustainable agriculture, and biophysics. Along with his deep-rooted technical skills, He's passionate about entrepreneurship and start-ups.
      </p>
      <p>Please don’t hesitate to contact me and check out my <a href="https://github.com/rg314">GitHub</a> and <a href="https://www.linkedin.com/in/rg314/">LinkedIn</a></p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
