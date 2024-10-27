import { ChangeEvent, FormEvent, useState } from "react";
import "./CreateProduct.css";
import axios from "axios";

const CreateProduct = () => {
    const [formData, setFormData] = useState<any>({
        name: "",
        description: "",
        price: 0,
        category: "",
        model: "",
        mainImage: "",
        galleryImages: "",
        videoUrl: "",
        ingredients: "",
        volumes: "",
        hoverImage: "",
        weight: 0,
        color: "",
        tags: "",
        details: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost/products/create", formData);
        } catch (e: any) {
            console.log("Error fetching products from server.", e);
        }
    }

    return (
        <div className="create-product container">
            <form onSubmit={handleSubmit}>
                <input name="name" required className="create-product__input" onChange={handleChange} placeholder="name"/>
                <input name="description" required className="create-product__input" onChange={handleChange} placeholder="description"/>
                <input name="price" required className="create-product__input" onChange={handleChange} placeholder="price"/>
                <input name="category" required className="create-product__input" onChange={handleChange} placeholder="category"/>
                <input name="model" required className="create-product__input" onChange={handleChange} placeholder="model"/>
                <input name="mainImage" required className="create-product__input" onChange={handleChange} placeholder="main image"/>
                <input name="galleryImages" required className="create-product__input" onChange={handleChange} placeholder="gallery images"/>
                <input name="videoUrl" required className="create-product__input" onChange={handleChange} placeholder="video url"/>
                <input name="ingredients" required className="create-product__input" onChange={handleChange} placeholder="ingredients"/>
                <input name="volumes" required className="create-product__input" onChange={handleChange} placeholder="volumes"/>
                <input name="hoverImage" required className="create-product__input" onChange={handleChange} placeholder="hover image"/>
                <input name="weight" required className="create-product__input" onChange={handleChange} placeholder="weight"/>
                <input name="color" required className="create-product__input" onChange={handleChange} placeholder="color"/>
                <input name="tags" required className="create-product__input" onChange={handleChange} placeholder="tags"/>
                <input name="details" required className="create-product__input" onChange={handleChange} placeholder="details"/>
                <button type="submit" className="create-product__btn">ADD PRODUCT</button>
            </form>
        </div>
    );
};

export default CreateProduct;