import React from "react";

import "./Footer.css";

import NIT from "../../assets/images/NIT.svg";
import tcpName from "../../assets/images/tcpName.svg";
import hack4bengal from "../../assets/images/hack4bengal.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="hack4bengal__footer" id="contactus">
      <div className="hack4bengal__footer-container1">
        <div className="hack4bengal__footer-logos">
          <img
            src={hack4bengal}
            className="hack4bengal__footer-logo-hack4bengal"
          />
          <img src={tcpName} className="hack4bengal__footer-logo-tcp" />
        </div>
        <div className="hack4bengal__footer-social-container">
          <div className="hack4bengal__footer-social-links-container">
            <a target="_blank" href="https://www.facebook.com/hack4bengal/">
              <svg
                fill="#999"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/codeutsavanitrr/"
            >
              <svg
                fill="#999"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a target="_blank" href="https://github.com/TCP-Tech">
              <svg
                fill="#999"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/codeutsavanitrr?lang=en"
            >
              <svg
                fill="#999"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/hack4bengal/"
            >
              <svg
                fill="#999"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </div>
          <p className="hack4bengal__footer-social-text">For more updates,</p>
          <p className="hack4bengal__footer-social-text">
            follow us on all social media.
          </p>
        </div>
      </div>
      <div className="hack4bengal__footer-container2">
        <div className="hack4bengal__footer-container2-left">
          <div className="hack4bengal__footer-container2-left-content">
            <img src={NIT} />
            <div className="hack4bengal__footer-container2-left-text">
              <h4>About NIT Raipur</h4>
              <p>
                The institute is committed to the challenging task of
                development of technical education by preparing seasoned
                graduates in highly sophisticated field of engineering and
                technology. For about five decades we have been doing it with
                sincerity and commitment at NIT Raipur.
              </p>
            </div>
          </div>
        </div>
        <div className="hack4bengal__footer-container2-right">
          <a href="#home" className="hack4bengal__footer-container2-right-links">
            <p className="hack4bengal__footer-container2-right-text">Home</p>
          </a>
          <a
            href="#aboutus"
            className="hack4bengal__footer-container2-right-links"
          >
            <p className="hack4bengal__footer-container2-right-text">About Us</p>
          </a>
          <a
            href="#events"
            className="hack4bengal__footer-container2-right-links"
          >
            <p className="hack4bengal__footer-container2-right-text">Events</p>
          </a>
          <a
            href="#sponsers"
            className="hack4bengal__footer-container2-right-links"
          >
            <p className="hack4bengal__footer-container2-right-text">Sponsers</p>
          </a>
          <a href="#faq" className="hack4bengal__footer-container2-right-links">
            <p className="hack4bengal__footer-container2-right-text">FAQ</p>
          </a>
        </div>
      </div>
      <div className="hack4bengal__footer-container3">
        <div className="hack4bengal__footer-social-team">
          Architected with ❤️ by <Link to="/team">TCP Team</Link>
        </div>
        <div className="hack4bengal__footer-back-to-top">
          <a href="#home">
            Back to Top
            <svg
              fill="#ff1717"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ marginLeft: "6px", transform: "translateX(2px)" }}
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </a>
        </div>

        <div className="hack4bengal__footer-social-map">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/National+Institute+of+Technology(NIT),+Raipur,+Great+Eastern+Rd,+Amanaka,+Raipur,+Chhattisgarh+492010/@21.2497222,81.6050291,17z/data=!4m6!3m5!1s0x3a28dde213f66723:0x21543965c50c43c7!8m2!3d21.2497222!4d81.6050291!16zL20vMGNqeXFk"
          >
            <svg
              fill="#900"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ marginRight: "6px", transform: "translateY(2px)" }}
            >
              <path d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
            </svg>
            View Map Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
