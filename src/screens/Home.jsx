import {useState} from "react";
import Button from "../component/Button/Button.jsx";
import product from "../api/data.js";

function Home(){
    
    // function testOne(){
    //     console.log(product)
    // }
    // testOne()
    // function testTwo(){
    //     alert("Button CLicked! 2")
    // }
    // function testThree(){
    //     alert("Button CLicked! 3")
    // }

    // Light  = True ==> False (Update state);

    const [theme, setTheme] = useState("light");

    function changeTheme(){
        if(theme == "light"){
            setTheme("dark");
        }
        else{
            setTheme("light")
        }
    }

    // Level 2 of React = Use State (Advance), Use Effect, Use Context


    return(
        <>
            <Button btnText="Hello Button" myColor="green" />
            {/* <button onClick={changeTheme}>Change Theme to {theme}</button>
            <h1>{theme}</h1>
            <ul>
                {product.map((user =>(
                    <li >{user.name}</li>
                )))}
            </ul> */}
            {/* <Button text="Button Primary" size="small" variant="danger" onClick={testOne}/>
            <Button text="Button Primary" size="large" variant="warning" isDisabled="true" onClick={testTwo}/>
            <Button text="Button Primary"  variant="primary" onClick={testThree}/>
            <br />
            <Button text="Button Primary" size="small" variant="outline-danger" onClick={testOne}/>
            <Button text="Button Primary" size="large" variant="outline-warning" isDisabled="true" onClick={testTwo}/>
            <Button text="Button Primary"  variant="outline-primary" onClick={testThree}/> */}
        </>
    )
}

export default Home;