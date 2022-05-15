import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({ 
    border="none",
    color="red",
    children="submit",
    height="50px",
    onClick= ()=>{}, 
    radius="10px",
    width="50px"
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
}

export default Button;
