import { FC, useEffect, useState } from "react";
import "./ProductInfo.css";
import VolumeSelector from "../../../shared/components/VolumeSelector/VolumeSelector";
import Accordion from "./Accordion/Accordion";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageViewer from "../../../shared/components/ImageViewer/ImageViewer";

const ProductInfo: FC<any> = () => {
    const [product, setProduct] = useState<any>(null);
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIdx, setSelectedImageIdx] = useState(0);
    const [viewImage, setViewImage] = useState(null);

    const decrement = () => {
        setQuantity(quantity - 1);
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    useEffect(() => {
        if (id) {
            const fetchProductById = async () => {
                try {
                    const response = await axios.get(`http://localhost/products/getById/${id}`);
                    setProduct(response.data);
                } catch (e: any) {
                    console.log("Error getting product from server.", e);
                }
            };
            fetchProductById();
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const accordionItems = [
        {
            title: "PRODUCT DETAILS",
            content: product.details
        },
        {
            title: "INGREDIENTS",
            content: product.ingredients
        }
    ];

    const galleryImagesArray = product.galleryImages.split(",");

    const handleSetImage = (idx: number) => {
        setSelectedImageIdx(idx);
    };

    const handleSetViewImage = () => {
        setViewImage(galleryImagesArray[selectedImageIdx])
    };

    return (
        <div className="product-info container-sm">
            <div className="product-info__left">
                {galleryImagesArray.map((galleryImage: string, idx: number) => (
                    <img src={galleryImage} key={galleryImage} alt={galleryImage} className={`product-info__left__img ${selectedImageIdx == idx ? "active" : ""}`} onClick={() => handleSetImage(idx)} />
                ))}
            </div>
            <div className="product-info__center">
                <img src={galleryImagesArray[selectedImageIdx]} className="product-info__center__img" alt={product.name} onClick={handleSetViewImage} />
            </div>
            <div className="product-info__right">
                <h2 className="product-info__right__title">{product.name} {product.model}</h2>
                <span className="product-info__right__reviews">{product.reviewsCount} REVIEWS</span>
                <p className="product-info__right__description">{product.description}</p>
                <span className="product-info__right__price">${product.price}.00</span>
                <VolumeSelector volumes={product.volumes.split(",")} />
                <div className="product-info__right__quantity">
                    <div className="product-info__right__quantity__count">
                        <button onClick={decrement} className="product-info__right__quantity__btn">-</button>
                        <span>{quantity}</span>
                        <button onClick={increment} className="product-info__right__quantity__btn">+</button>
                    </div>
                    <button className="product-info__right__btn">BUY</button>
                </div>
                <Accordion items={accordionItems} />
            </div>

            <div className="product-info__center__786">
                <h2 className="product-info__right__title">{product.name} {product.model}</h2>
                <span className="product-info__right__reviews">{product.reviewsCount} REVIEWS</span>
                <p className="product-info__right__description">{product.description}</p>
                <img src={product.mainImage} className="product-info__786__center__img" alt={product.name} onClick={handleSetViewImage} />
                <span className="product-info__right__price">${product.price}.00</span>
                <VolumeSelector volumes={product.volumes.split(",")} />
                <div className="product-info__right__quantity">
                    <div className="product-info__right__quantity__count">
                        <button onClick={decrement} className="product-info__right__quantity__btn">-</button>
                        <span>{quantity}</span>
                        <button onClick={increment} className="product-info__right__quantity__btn">+</button>
                    </div>
                    <button className="product-info__right__btn">ADD TO BAG</button>
                </div>
                <Accordion items={accordionItems} />
            </div>
            <ImageViewer selectedImage={viewImage} setSelectedImage={setViewImage} />
        </div>
    );
};

export default ProductInfo;