export default function ValidateInput(label, id, error, ...props) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} onBlur={() => handleInputBlur("email")} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
