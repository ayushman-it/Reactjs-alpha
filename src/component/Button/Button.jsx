import styled from "@emotion/styled";

// Varient
// function getColor(UserColor){
//     switch(UserColor){
//         case "success":
//             return "green";
        
//         case "pending":
//             return "orange";
        
//         case "failed":
//             return "red";
//     }
// }

// Component with Styling
// ---Component Name = dependency.htmltag
const PrathamButton = styled.button`
    background-color: ${({UserColor}) => {
         switch(UserColor){
            case "success":
                return "green";
            
            case "pending":
                return "orange";
            
            case "failed":
                return "red";
        }
    }};

    padding: ${({getSize}) => {
        switch(getSize){
            case "sm":
                return "8px 10px";
            
            case "md":
                return "10px 22px";
            
            case "lg":
                return "12px 22px";
        }
    }}
`;


// Architecture
// Function Name
function Button({text, UserColor, getSize}){
    return(
        <PrathamButton UserColor={UserColor} getSize={getSize}>{text}</PrathamButton>
    )
}

export default Button;