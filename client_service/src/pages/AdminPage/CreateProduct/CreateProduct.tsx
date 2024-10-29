import { ChangeEvent, FormEvent, useState } from "react";
import "./CreateProduct.css";
import axios from "axios";

const volumeOptions = [
    "10ml", "30ml", "50ml", "100ml", "250ml"
];

const categoryOptions = [
    "fragrance", "makeup", "body"
];

const CreateProduct = () => {
    const [formData, setFormData] = useState<any>({
        name: "",
        description: "",
        price: 0,
        category: "",
        model: "",
        mainImage: "",
        galleryImages: [],
        videoUrl: "",
        ingredients: "",
        volumes: [],
        hoverImage: "",
        weight: 0,
        color: "",
        tags: "",
        details: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "description") {
            const wordCount = value.split(/\s+/).filter(word => word.length > 0).length;
            if (wordCount <= 15) {
                setFormData((prevData: any) => ({
                    ...prevData,
                    [name]: value
                }));
            }
        } else {
            setFormData((prevData: any) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prevData: any) => {
            const volumes = checked
                ? [...prevData.volumes, value]
                : prevData.volumes.filter((v: string) => v !== value);

            return { ...prevData, volumes };
        });
    };

    const handleGalleryImageChange = (index: number, value: string) => {
        const updatedGalleryImages = [...formData.galleryImages];
        updatedGalleryImages[index] = value;
        setFormData((prevData: any) => ({
            ...prevData,
            galleryImages: updatedGalleryImages
        }));
    };

    const addGalleryImage = () => {
        setFormData((prevData: any) => ({
            ...prevData,
            galleryImages: [...prevData.galleryImages, ""]
        }));
    };

    const removeGalleryImage = (index: number) => {
        const updatedGalleryImages = formData.galleryImages.filter((_: any, i: any) => i !== index);
        setFormData((prevData: any) => ({
            ...prevData,
            galleryImages: updatedGalleryImages
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const dataToSubmit = {
            ...formData,
            volumes: formData.volumes.join(", "),
            galleryImages: formData.galleryImages.join(", ")
        };

        try {
            const response = await axios.post("http://localhost/products/create", dataToSubmit);
            console.log(response.data); // Handle response as needed
        } catch (e: any) {
            console.log("Error fetching products from server.", e);
        }
    };

    return (
        <div className="create-product container">
            <form onSubmit={handleSubmit}>
                <input name="name" required className="create-product__input" onChange={handleChange} placeholder="Product Name" />

                <input
                    name="description"
                    required
                    className="create-product__input"
                    onChange={handleChange}
                    placeholder="Description"
                    value={formData.description}
                />
                <small className="small">{formData.description.split(/\s+/).filter((word: any) => word.length > 0).length}/15 words</small>

                <input name="price" required className="create-product__input" onChange={handleChange} placeholder="Price" />

                <select name="category" required className="create-product__select" onChange={handleChange}>
                    <option value="">Select a category</option>
                    {categoryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>

                <input name="model" required className="create-product__input" onChange={handleChange} placeholder="Model" />
                <input name="mainImage" required className="create-product__input" onChange={handleChange} placeholder="Main Image URL" />

                <div className="create-product__gallery">
                    <label style={{color: "#fff"}}>Gallery Images:</label>
                    {formData.galleryImages.map((image: any, index: any) => (
                        <div key={index} className="create-product__gallery-item">
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => handleGalleryImageChange(index, e.target.value)}
                                placeholder="Image URL"
                                className="create-product__gallery-item__input"
                                required
                            />
                            <button type="button" onClick={() => removeGalleryImage(index)} className="create-product__gallery__remove__btn">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addGalleryImage} className="create-product__gallery__btn">Add Image</button>
                </div>

                <input name="videoUrl" required className="create-product__input" onChange={handleChange} placeholder="Video URL" />
                <input name="ingredients" required className="create-product__input" onChange={handleChange} placeholder="Ingredients" />

                <div className="create-product__volumes">
                    {volumeOptions.map(option => (
                        <div key={option} className="create-product__volumes__option">
                            <input
                                type="checkbox"
                                value={option}
                                onChange={handleVolumeChange}
                            />
                            {option}
                        </div>
                    ))}
                </div>

                <input name="hoverImage" required className="create-product__input" onChange={handleChange} placeholder="Hover Image URL" />
                <input name="weight" required className="create-product__input" onChange={handleChange} placeholder="Weight" />
                <input name="color" required className="create-product__input" onChange={handleChange} placeholder="Color" />
                <input name="tags" required className="create-product__input" onChange={handleChange} placeholder="Tags" />
                <input name="details" required className="create-product__input" onChange={handleChange} placeholder="Details" />
                <button type="submit" className="create-product__btn">ADD PRODUCT</button>
            </form>
        </div>
    );
};

export default CreateProduct;
