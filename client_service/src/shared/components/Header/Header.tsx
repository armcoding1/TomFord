import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import "./Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header container">
            <a href="/" className="header__title">DUBAI PERFUME</a>
            <div className="burger" onClick={() => setIsOpen(prev => !prev)}>
                &#9776;
            </div>
            <nav className={`burger__list ${isOpen ? "open" : ""}`}>
                {isOpen && (
                    <div className="close-icon" onClick={() => setIsOpen(false)}>&times;</div>
                )}
                <ul className="burger__ul">
                    <div>
                        {["FRAGRANCE", "MOST WANTED", "GIFTS", "EXCLUSIVE OFFERS"].map(item => (
                            <li key={item} className="burger__item">
                                <a href={`/products/${item.toLowerCase().replace(" ", "-")}`} className="burger__link">{item}</a>
                            </li>
                        ))}
                    </div>
                    <div className="burger__icons">
                        <div className="burger__icon"><AiOutlineUser size="22px" color="#666" /><p className="burger__icon__text">SIGN IN / CREATE ACCOUNT</p></div>
                        <div className="burger__icon"><IoLocationOutline size="22px" color="#666" /><p className="burger__icon__text">STORE LOCATOR</p></div>
                    </div>
                </ul>
            </nav>
            <nav className="header__nav">
                <ul className="header__list">
                    {["FRAGRANCE", "MOST WANTED", "GIFTS", "EXCLUSIVE OFFERS"].map(item => (
                        <li key={item} className="header__item">
                            <a href={`/products/${item.toLowerCase().replace(" ", "-")}`} className="header__link">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Header;