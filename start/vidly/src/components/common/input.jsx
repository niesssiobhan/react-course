import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        {...rest}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}{" "}
    </div>
  );
};

export default Input;

//---------------Notes--------------//

// the arguaments that we are passing at the top are {name, lable} because we are using object desructuring

// {error && <div className="alert alert-danger">{error}</div>} this means that if error is truthy then the expression after will be returned. This is about conditional rendering with componets

// when you are using the 'rest' opporator you are able to automaically pass the other attributes. You are using the rest opporator to get the other properties from the props object
//  value={value}
//  onChane={onChange}
//  type={type}

// is the same as:
// {...rest}
