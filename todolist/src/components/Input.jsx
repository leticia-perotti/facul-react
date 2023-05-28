const Input = ({ tipo, classe, funOnChange, funOnKeyDown, valor}) => {
    return (
      <input 
      type={tipo} 
      onChange={funOnChange} 
      className={classe}
      onKeyDown={funOnKeyDown}
      value={valor}
      />
    );
  };
  
export default Input;