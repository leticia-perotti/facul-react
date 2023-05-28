const Button = ({ funOnClick, classe, texto }) => {
    return (
      <button type="button" onClick={funOnClick} className={classe}>
        {texto}
      </button>
    );
  };
  
export default Button;