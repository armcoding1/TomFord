import GeneralBanner from "../../shared/components/Banner/GeneralBanner";
import Footer from "../../shared/components/Footer/Footer";
import MostWanted from "../../shared/components/MostWanted/MostWanted";
import ProductCard from "../../shared/components/ProductCard/ProductCard";
import AdBanner from "./AdBanner/AdBanner";
import "./GeneralPage.css";

const GeneralPage = () => {
    return (
        <div className="general-page">
            <GeneralBanner />
            <div className="container-sm">
                <h2 className="general-page__subtitle">MOST WANTED</h2>
                <MostWanted />
            </div>
            <div className="ad-banner">
                <AdBanner name="BLACK LACQUER" img="https://assets.sdcdn.io/_sb/f/1018472/2000x2000/10ef631a77/tfb_digitalcrop_2024_blacklacquer_50ml_ingredient_2000x2000.jpg" />
                <AdBanner name="BLACK ORCHID" img="https://assets.sdcdn.io/_sb/f/1018472/1250x1250/23f4a50503/tfb_online_hp_sigature_desktop_1250.jpg" />
            </div>
            <Footer />
        </div>
    );
}

export default GeneralPage;