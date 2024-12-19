import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterinIn } from 'react-icons/fa';
import { FaThreadsIn } from 'react-icons/fa';
/**
 *
 *
 * TODO: Need to add classes and styling.
 * TODO: Need to add links.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Josh Ashton</p>
          </div>
          <div className="col-md-6">
            <ul className="social-links">
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/blog">Blog</a></li>
              <li>
                <a href="https://www.linkedin.com/in/joshuatashton/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/joshuatashton/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
