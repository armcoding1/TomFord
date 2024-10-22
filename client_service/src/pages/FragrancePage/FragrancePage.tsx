import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import "./FragrancePage.css";

const FragrancePage = () => {
    return (
        <div className="fragrance-page">
            <Banner />
            <div className="fragrance-page__flex container-sm">
                <Sidebar />
                <Products />
            </div>
        </div>
    );
};

export default FragrancePage;