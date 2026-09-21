import './Button.css'

// Raw ----------------------Props-------------------------------
function Button({btnTxt, btnType, color, isDisbled, customClass}){
    return(
        // Formatings of Porps
        <button 
            type={btnType} 
            disabled={isDisbled}
            className={`btn-custom  ${color, customClass}`}
            >
               {btnTxt}
        </button>
    )
}

export default Button;

// Button
// Text, Type, Disabled, class, event