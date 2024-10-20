import { FC } from "react";
import "./AdBanner.css";

const AdBanner: FC<any> = ({ name, img }) => {
    return (
        <div className="ad-banner-card" style={{ backgroundImage: `url(${img})` }}>
            <h2 className="ad-banner-card__title">{name}</h2>
            <button className="ad-banner-card__btn">SHOP NOW</button>
        </div>
    );
};

export default AdBanner;