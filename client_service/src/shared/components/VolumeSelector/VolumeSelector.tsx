import React, { FC, useState } from "react";
import "./VolumeSelector.css";

const VolumeSelector: FC<any> = ({ volumes }) => {
    const [selectedVolume, setSelectedVolume] = useState(volumes[1]);

    const handleSelect = (volume: string) => {
        setSelectedVolume(volume);
    };

    return (
        <div className="volume-selector">
            {volumes.map((volume: string) => (
                <button
                    className="volume-selector__btn"
                    key={volume}
                    onClick={() => handleSelect(volume)}
                    style={{
                        border: selectedVolume === volume ? "1.8px solid black" : "1px solid gray"
                    }}
                >
                    {volume}
                </button>
            ))}
        </div>
    );
};

export default VolumeSelector;