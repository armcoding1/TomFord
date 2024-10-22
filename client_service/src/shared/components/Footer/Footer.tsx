import "./Footer.css";
import { FaFacebookF, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer__left">
                <h2 className="footer__logo">DUBAI PERFUME</h2>
                <div className="footer__icons">
                    <FaInstagram />
                    <FaTiktok />
                    <FaFacebookF />
                    <FaYoutube />
                    <FaSpotify />
                </div>
            </div>
            <div>
                <span className="footer__rights">&copy; 2024 DUBAI PERFUME. All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;