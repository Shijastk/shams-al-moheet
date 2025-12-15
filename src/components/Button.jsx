import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-serif font-medium transition-all duration-300 ease-out active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-brand-pink text-white hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-pink/30",
        secondary: "bg-white text-brand-pink hover:bg-brand-light hover:text-brand-dark shadow-sm",
        outline: "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
