import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

export const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <Link className="footer__btn btn__ins" to="/"/>
      <Link className="footer__btn btn__prod" to="/product"/>
    </div>
  </div>
)
