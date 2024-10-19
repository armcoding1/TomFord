import { useEffect, useState } from "react";
import "./ProductCard.css";
import axios from "axios";
import { Productable } from "../../../types/Productable";

const ProductCard = () => {
    const [products, setProducts] = useState<Productable[]>([]);

    useEffect(() => {
        const fetchProductByCategory = async () => {
            try {
                const response = await axios.get("http://localhost/products/getByCategory/fragrance");
                setProducts(response.data);
            } catch (e: any) {
                console.log("Error getting product from server.", e);
            }
        };
        fetchProductByCategory();
    }, []);

    return (
        <div className="product-card-parent">
            {products.map((product: Productable) => (
                <div className="product-card" key={product.name}>
                    <img src={product.mainImage} alt={product.name} className="product-card__img" />
                    <div className="product-card__content">
                        <h3 className="product-card__title">{product.model} EAU DE PARFUM</h3>
                        <p className="product-card__text">{product.description}</p>
                        <span className="product-card__price">${product.price}</span>
                        <button className="product-card__btn">ADD TO BAG</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
