import { ChangeEvent, FC } from "react";

const Checkbox: FC<{ value: string; label: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = ({ value, label, onChange }) => (
    <label className="sidebar__checkbox">
        <input type="checkbox" value={value} onChange={onChange} />
        <span className="sidebar__text">{label}</span>
    </label>
);

export default Checkbox;