import GeneralBanner from "../../shared/components/Banner/GeneralBanner";
import MostWanted from "../../shared/components/MostWanted/MostWanted";
import ProductCard from "../../shared/components/ProductCard/ProductCard";
import "./GeneralPage.css";

const GeneralPage = () => {
    return (
        <div className="general-page">
            <GeneralBanner />
            <div className="container-sm">
                <h2 className="general-page__subtitle">MOST WANTED</h2>
                <MostWanted />
            </div>
        </div>
    );
}

export default GeneralPage;