const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-outline-primary mb-1" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
