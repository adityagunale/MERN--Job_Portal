import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

import logo from "../images/JB_logo.png"

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
        <img  id="logof" src={logo} alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Shivani KH, TQ.DIST Latur, Maharastra</li>
            <li>aadigunale2002@gmail.com</li>
            <li>9112698501</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            
            <li>
              <Link to={"https://www.instagram.com/_aditya_reddy_45/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/adityagunale"}>
                <span>
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/aditya-gunale-541317180/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By <span> &nbsp; </span><a href="https://github.com/adityagunale" id="anker1"> Aditya Gunale</a>
      </div>
    </>
  );
};

export default Footer;
