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
                <AdBanner name="CREED AVENTUS" img="https://creedboutique.com/cdn/shop/files/aventus-ingredients.jpg?v=1693971097&width=750" />
                <AdBanner name="BLACK ORCHID" img="https://assets.sdcdn.io/_sb/f/1018472/1250x1250/23f4a50503/tfb_online_hp_sigature_desktop_1250.jpg" />
                <AdBanner name="FUCKING FABULOUS" img="https://sdcdn.io/tf/tf_sku_T61501_2000x2000_1.png?width=650px&height=750px" />
            </div>
            <div className="container-sm">
                <h2 className="general-page__subtitle">FROM SELLER</h2>
            </div>
            <Footer />
        </div>
    );
}

export default GeneralPage;