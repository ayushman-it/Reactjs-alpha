import styled from "@emotion/styled";

const PrathamButton = styled.button`
    background: ${({myColor}) => myColor};
    color:white;
    border:none;
    padding: 10px 20px;

    &:hover{
        background-color: darkblue;
    }
    &:focus{
        background-color: lightblue;
    }
`;

function Button({btnText, myColor}){
    return(
        <PrathamButton myColor={myColor} btnText={btnText}>{btnText}</PrathamButton>
    )
}

export default Button;