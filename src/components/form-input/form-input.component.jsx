const FormInput = ({ label, onChange, value }) => {
  return (
    <div className="formInput">
      <label htmlFor="displayName">{label}</label>
      <input
        required
        type="text"
        name="displayName"
        id="displayName"
        onChange={handleChange}
        value={SignUpData.displayName}
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
