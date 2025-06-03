import React from 'react';
import './button.css';

const Button = ({ type = 'default', children }) => {
  return <button className={`btn ${type}`}>{children}</button>;
};

export default Button;
