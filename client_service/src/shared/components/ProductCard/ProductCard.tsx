import { FC, useEffect, useState } from "react";
import "./ProductCard.css";
import axios from "axios";
import { Productable } from "../../../types/Productable";
import VolumeSelector from "../VolumeSelector/VolumeSelector";
import { useNavigate } from "react-router-dom";

const ProductCard: FC<any> = ({ products, setProducts }) => {
    const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
    const [productId, setProductId] = useState<number | null>(null);
    const navigate = useNavigate();

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

    const getProductId = (id: number) => {
        setProductId(id);
        navigate(`/product/${id}`)
    };

    return (
        <div className="product-card-parent">
            {products.map((product: Productable) => (
                <div
                    className="product-card"
                    key={product.id}
                >
                    <img
                        src={hoveredProductId === product.id ? product.hoverImage : product.mainImage}
                        alt={product.name}
                        className="product-card__img"
                        onMouseEnter={() => setHoveredProductId(product.id)}
                        onMouseLeave={() => setHoveredProductId(null)}
                        onClick={() => getProductId(product.id)}
                    />
                    <div className="product-card__content">
                        <h3 className="product-card__title">{product.name} {product.model}</h3>
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
