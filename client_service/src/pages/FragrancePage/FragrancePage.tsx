import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import "./FragrancePage.css";
import { useState } from "react";
import { Productable } from "../../types/Productable";

const FragrancePage = () => {
    const [products, setProducts] = useState<Productable[]>([]);

    return (
        <div className="fragrance-page">
            <Banner />
            <div className="fragrance-page__flex container-sm">
                <Sidebar setProducts={setProducts} />
                <Products products={products} setProducts={setProducts} />
            </div>
        </div>
    );
};

export default FragrancePage;