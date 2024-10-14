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
      />
    </div>
  );
};

export default FormInput;
