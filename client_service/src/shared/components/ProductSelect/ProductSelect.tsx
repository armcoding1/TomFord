import "./ProductSelect";

const ProductSelect = () => {
    return (
        <div className="product-select">
            <select>
                <option value="best-sellers">BEST SELLERS</option>
                <option value="price-high-to-low">PRICE (HIGH TO LOW)</option>
                <option value="price-low-to-high">PRICE (LOW TO HIGH)</option>
            </select>
        </div>
    );
}

export default ProductSelect;