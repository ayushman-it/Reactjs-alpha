import './Button.css'

// Raw ----------------------Props-------------------------------
function Button({text, variant = "primary", isDisabled = false, onClick, size = "mid"}){
    let defaultClass = "btn";


    // Colors

    if(variant == "primary"){
        defaultClass += " btn-primary";
    }
    else if(variant == "danger"){
        defaultClass += " btn-danger";
    }
    else if(variant == "warning"){
        defaultClass += ' btn-warning';
    }
    else if(variant == "outline-primary"){
        defaultClass += ' btn-outline-primary';
    }
    else if(variant == "outline-danger"){
        defaultClass += ' btn-outline-danger';
    }
    else if(variant == "outline-warning"){
        defaultClass += ' btn-outline-warning';
    }
    else{
        defaultClass += " btn-primary";
    }


    // Sizes
    if(size == 'small'){
        defaultClass += " btn-sm";
    }
    else if(size == 'large'){
        defaultClass += " btn-lg";
    }
    else{
        defaultClass += " btn-md"
    }


    return(
        <button 
            className={defaultClass}
            disabled={isDisabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}


export default Button;


// Button, Badge, Alert, Card, 

// Card = title, subtitle, bodyText, image,
