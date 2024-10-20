import { useEffect, useState } from "react";
import "./MostWanted.css";
import { Productable } from "../../../types/Productable";
import axios from "axios";
import VolumeSelector from "../VolumeSelector/VolumeSelector";

const MostWanted = () => {
    const [products, setProducts] = useState<Productable[]>([]);
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

    useEffect(() => {
        const fetchProductByCategory = async () => {
            try {
                const response = await axios.get("http://localhost/products/getTop3");
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
                <div
                    className="product-card"
                    key={product.id}
                    onMouseEnter={() => setHoveredProductId(product.id)}
                    onMouseLeave={() => setHoveredProductId(null)}
                >
                    <img
                        src={hoveredProductId === product.id ? product.hoverImage : product.mainImage}
                        alt={product.name}
                        className="product-card__img"
                    />
                    <div className="product-card__content">
                        <VolumeSelector volumes={product.volumes.split(",")} />
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

export default MostWanted;