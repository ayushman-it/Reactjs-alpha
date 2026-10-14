import {useEffect, useState} from "react";
// import Button from "../component/Button/Button.jsx";
// import product from "../api/data.js";

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

    // function handleClick(event){
    //     if(event.currentTarget.innerText == "Vote"){
    //         console.log("18+");
    //     }else{
    //         console.log("Minor");
    //     }
    // }


    // function getStudent(name){
    //     console.log("Student Name : ", name);
    // }

    // function handleMouseEnter(){
    //     console.log("Mouse Entered!");
    // }

    // function handleMouseLeave(){
    //     console.log("Mouse Left!");
    // }

    // function hanldleDoubleClick(){
    //     alert("Truggerd Double Click");
    // }


    // function handleChange(event){
    //     console.log(event.target.value);
    // }

    // function handleSubmit(event){
    //     event.preventDefault();
    //     console.log("form Submitted Successfully!")
    // }


    return(
        <>
            {/* Simple Function */}
            {/* ____________________________ */}

            {/* Correct */}
            {/* <button onClick={handleClick}>Button Click</button> */}
            {/* Instant Execute (Not Suggested)*/}
            {/* <button onClick={handleClick()}>Button Click</button> */}
            {/* With Arrow function */}
            {/* <button onClick={() => alert("Hello Arrow Function")}>Button</button> */}


            {/* Function with parameteres */}
            {/* _____________________________ */}
            
            {/* <button onClick={() => getStudent("Ayushman")}>Student 01</button> 
            <button onClick={() => getStudent("Pratham")}>Student 02</button> 
            <button onClick={() => getStudent("Priya")}>Student 03</button> 
            <button onClick={() => getStudent("Akachncha")}>Student 04</button>  */}


            {/* Mouse Event */}

            {/* <button 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onDoubleClick={hanldleDoubleClick}
            >
                Button Click
            </button> */}

            {/* <button onClick={handleClick}>Join Wating List</button> */}

            {/* <div>
                <h2>Enter Your Name</h2>
                <input type="text" placeholder="Enter your name..." onFocus={() => handleChange(event)} />
            </div> */}

            {/* <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="Enter your name..." />
                 <button type="submit">Submit</button>
            </form> */}
            

            {/* Task - */}

            {/* 1. Create a forms, match all inputs values, show data on console.
            2. Result Decleariation - Grade A, Grade B, Grade C, Grade D, fail (User Input) */}














            {/* <Button text="Done" UserColor="success" getSize="sm" />
            <Button text="Wait" UserColor="pending" getSize="md" />
            <Button text="Failed" UserColor="failed" getSize="lg" /> */}
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