import { ChangeEvent } from "react";

type formInputType = {
  name: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  hidden?: boolean;
};

const FormInput = ({
  name,
  label,
  onChange,
  value,
  hidden = false,
}: formInputType) => {
  return (
    <div className="formInput">
      <label htmlFor={name}>{label}</label>
      <input
        required
        type={hidden ? "password" : "text"}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        minLength={3}
        maxLength={20}
        style={{
          height: "30px",
          border: "1.5px solid black",
          borderRadius: "5px",
          padding: "10px",
          font: "Open Sans Condensed , sans-serif",
          fontSize: "13px",
          letterSpacing: "1px",
        }}
      />
    </div>
  );
};

export default FormInput;
