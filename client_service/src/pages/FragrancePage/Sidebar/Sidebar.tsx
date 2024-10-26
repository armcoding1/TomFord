import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div>
            <span className="fragrances">FRAGRANCES</span>
            <div className="sidebar">
                <label className="sidebar__checkbox">
                    <input type="checkbox" value="TOM FORD" />
                    <span className="sidebar__text">TOM&nbsp;FORD</span>
                </label>
                <label className="sidebar__checkbox">
                    <input type="checkbox" value="CREED" />
                    <span className="sidebar__text">CREED</span>
                </label>
                <label className="sidebar__checkbox">
                    <input type="checkbox" value="NASOMATTO" />
                    <span className="sidebar__text">NASOMATTO</span>
                </label>
            </div>
        </div>
    );
}

export default Sidebar;
