import React from 'react';
import { pageLinks, socialLinks } from './data';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks groupClass='footer-links' itemClass='footer-link' />
      <SocialLinks groupClass='footer-icons' itemClass='footer-icon' />
        <p className="copyright">
          copyright &copy; backroads travel yours company
          <span id='date'>{new Date().getFullYear()}</span> all right reserved
        </p>
      </footer>
  )
}
