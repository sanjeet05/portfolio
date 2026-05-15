import React from "react";

const variantStyles = {
  primary: {
    backgroundColor: "#BD5D38",
    color: "#fff",
    border: "2px solid #BD5D38",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#BD5D38",
    border: "2px solid #BD5D38",
  },
};

const baseStyle = {
  display: "inline-block",
  padding: "0.4rem 1.1rem",
  borderRadius: "4px",
  fontFamily: "'Saira Extra Condensed', serif",
  fontWeight: 700,
  fontSize: "0.95rem",
  textTransform: "uppercase",
  textDecoration: "none",
  cursor: "pointer",
  transition: "opacity 0.15s ease",
  lineHeight: 1.5,
};

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  style = {},
  ...props
}) => {
  const merged = { ...baseStyle, ...variantStyles[variant], ...style };

  if (href) {
    return (
      <a
        href={href}
        className={className}
        style={merged}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      style={merged}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
