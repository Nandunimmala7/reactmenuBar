import React from "react";
import './Button.css'
const STYLE = [
    'btn--primary',
    'btn--outline'
]
const SIZES = [
    'btn--menu',
    'btn--large'
]
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
})=>{
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
        type={type}>
            {children}

        </button>
    )
}