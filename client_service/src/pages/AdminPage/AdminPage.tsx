import { Link } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = () => {
    return (
        <div className="container">
            <Link to="/admin/products/create">CREATE PRODUCT</Link>
        </div>
    );
};

export default AdminPage;