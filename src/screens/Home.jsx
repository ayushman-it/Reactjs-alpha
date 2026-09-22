import Button from "../component/Button/Button"

function Home(){
    
    function testOne(){
        alert("Button CLicked! 1")
    }
    function testTwo(){
        alert("Button CLicked! 2")
    }
    function testThree(){
        alert("Button CLicked! 3")
    }

    return(
        <>
            <Button text="Button Primary" size="small" variant="danger" onClick={testOne}/>
            <Button text="Button Primary" size="large" variant="warning" isDisabled="true" onClick={testTwo}/>
            <Button text="Button Primary"  variant="primary" onClick={testThree}/>
<br />
            <Button text="Button Primary" size="small" variant="outline-danger" onClick={testOne}/>
            <Button text="Button Primary" size="large" variant="outline-warning" isDisabled="true" onClick={testTwo}/>
            <Button text="Button Primary"  variant="outline-primary" onClick={testThree}/>
          
        </>
    )
}

export default Home;