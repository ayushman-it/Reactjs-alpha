import {useEffect, useState} from "react";
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

    // User State is commonly use for add, update vertual dom in react js by using setter and getter method 
     
//    const [getName, setName] = useState("Ayuhsman");
    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.log("Count Updating...", count)
    // }, [count])

    // ------------------------------------
    // const changeName = () =>{
    //         setName("Pratham");
    // }
   
    // DOM Load -----> Function Render -----> check function calling ----> One time execute function
    // useEffect(()=>{
    //     // Finction Calling
    //     changeName();
    // }, [])

    // -----------------------------------
    // const [getUser, setUser] = useState([]);

    // Use effect is inbuild method in react js which is works after the full dom load and runs function only one time.
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(data => {
    //             setUser(data);
    //         });
    // }, []);

   

    // Level 2 of React = Use State (Advance), Use Effect, Use Context


    return(
        <>
            <Button text="Done" UserColor="success" getSize="sm" />
            <Button text="Wait" UserColor="pending" getSize="md" />
            <Button text="Failed" UserColor="failed" getSize="lg" />
            {/* <ul>
                {getUser.map(user =>(
                    <li>
                        {user.name}
                    </li>
                ))}
            </ul> */}

            {/* <h1>{count}</h1>
            <button disabled={(count == 10) ? true : false} onClick={()=>{setCount(count + 1)}}>Click Add</button>
            <button disabled={(count <= 0) ? true : false} onClick={()=>{setCount(count - 1)}}>Click Add</button> */}
            {/* <button onClick={changeName}>Change Name</button> */}
            {/* <h1>{getName}</h1> */}
            {/* <Button btnText="Hello Button" myColor="green" /> */}
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