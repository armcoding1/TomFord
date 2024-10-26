import { FC } from "react";
import "./ImageViewer.css";

const ImageViewer: FC<any> = ({ selectedImage, setSelectedImage }) => {
    const handleClose = (e: any) => {
        e.stopPropagation();
    };

    return (
        selectedImage && (
            <div className="image-backdrop" onClick={() => setSelectedImage(null)}>
                <img src={selectedImage} className="image-backdrop__img" onClick={handleClose} />
            </div>
        )
    )
};

export default ImageViewer;