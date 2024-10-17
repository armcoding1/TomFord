import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <h1 className="header__title">TOM FORD</h1>
            </a>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="/products/most-wanted" className="header__link">MOST WANTED</a>
                    </li>
                    <li className="header__item">
                        <a href="/products/fragrance" className="header__link">FRAGRANCE</a>
                    </li>
                    <li className="header__item">
                        <a href="/products/makeup" className="header__link">MAKEUP</a>
                    </li>
                    <li className="header__item">
                        <a href="/products/skincare" className="header__link">SKINCARE</a>
                    </li>
                    <li className="header__item">
                        <a href="/products/gifts" className="header__link">GIFTS</a>
                    </li>
                    <li className="header__item">
                        <a href="/online-services" className="header__link">SERVICES</a>
                    </li>
                    <li className="header__item">
                        <a href="/exclusive-offers" className="header__link">EXCLUSIVE OFFERS</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;