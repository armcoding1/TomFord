import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import "./FragrancePage.css";
import ProductSelect from "../../shared/components/ProductSelect/ProductSelect";

const FragrancePage = () => {
    return (
        <div className="fragrance-page">
            <Banner />
            {/* <ProductSelect /> */}
            <div className="fragrance-page__flex container-sm">
                <Sidebar />
                <Products />
            </div>
        </div>
    );
};

export default FragrancePage;