export const Input = ({ label, placeholder, onChange, pattern, title, error, ...props }) => {
  const isError = error;

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        className={`form__input ${isError ? 'error' : ''}`}
        placeholder={placeholder || label}
        onChange={onChange}
        pattern={pattern}
        title={title}
        {...props}
      />
      {isError && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
};