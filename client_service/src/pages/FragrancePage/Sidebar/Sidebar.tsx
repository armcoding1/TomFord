import { ChangeEvent, FC, useEffect, useState } from "react";
import "./Sidebar.css";
import axios from "axios";

const Sidebar: FC<any> = ({ setProducts }) => {
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        setSelectedNames((prevSelectedNames) => {
            if (checked) {
                return [...prevSelectedNames, value];
            } else {
                return prevSelectedNames.filter(name => name !== value);
            }
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            if (selectedNames.length === 0) {
                const response = await axios.get("http://localhost/products/getByCategory/fragrance");
                setProducts(response.data);
                return;
            }

            try {
                const responses = await Promise.all(
                    selectedNames.map(name => axios.get(`http://localhost/products/getByName/${name}`))
                );

                const products = responses.map((response) => response.data);

                setProducts(products.flat());
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [selectedNames, setProducts]);

    return (
        <div>
            <span className="fragrances">FRAGRANCES</span>
            <div className="sidebar">
                <label className="sidebar__checkbox">
                    <input type="checkbox" value="tom_ford" onChange={handleChange} />
                    <span className="sidebar__text">TOM&nbsp;FORD</span>
                </label>
                <label className="sidebar__checkbox">
                    <input type="checkbox" value="creed" onChange={handleChange} />
                    <span className="sidebar__text">CREED</span>
                </label>
                <label className="sidebar__checkbox">
                    <input type="checkbox" value="nasomatto" onChange={handleChange} />
                    <span className="sidebar__text">NASOMATTO</span>
                </label>
            </div>
        </div>
    );
};

export default Sidebar;
