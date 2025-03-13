const ErrorsValue = ({ error }) => {
  return error ? <p className="error-message text-red-500">{error}</p> : null;
};

export default ErrorsValue;