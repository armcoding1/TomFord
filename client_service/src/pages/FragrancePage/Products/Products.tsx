import { FC } from "react";
import ProductCard from "../../../shared/components/ProductCard/ProductCard";
import "./Products.css";

const Products: FC<any> = ({ products, setProducts }) => {
    return (
        <div className="products">
            <ProductCard products={products} setProducts={setProducts} />
        </div>
    );
};

export default Products;