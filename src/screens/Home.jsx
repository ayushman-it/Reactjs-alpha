
const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Smartphone",
        price: 69999,
        brand: "Apple",
        stock: 15
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "Smartphone",
        price: 74999,
        brand: "Samsung",
        stock: 20
    },
    {
        id: 3,
        name: "MacBook Air",
        category: "Laptop",
        price: 99900,
        brand: "Apple",
        stock: 8
    },
    {
        id: 4,
        name: "Inspiron 15",
        category: "Laptop",
        price: 52999,
        brand: "Dell",
        stock: 12
    },
    {
        id: 5,
        name: "WH-1000XM5",
        category: "Headphones",
        price: 29990,
        brand: "Sony",
        stock: 25
    },
    {
        id: 6,
        name: "Apple Watch Series 10",
        category: "Smartwatch",
        price: 46900,
        brand: "Apple",
        stock: 10
    },
    {
        id: 7,
        name: "Galaxy Watch",
        category: "Smartwatch",
        price: 24999,
        brand: "Samsung",
        stock: 18
    },
    {
        id: 8,
        name: "JBL Flip 6",
        category: "Speaker",
        price: 11999,
        brand: "JBL",
        stock: 30
    },
    {
        id: 9,
        name: "Logitech MX Master",
        category: "Mouse",
        price: 8999,
        brand: "Logitech",
        stock: 22
    },
    {
        id: 10,
        name: "Keychron K2",
        category: "Keyboard",
        price: 9499,
        brand: "Keychron",
        stock: 14
    }
];

function Home() {

    let age = 20;

    function checkAge() {
        if (age >= 18) {
            alert("You are Adult!!")
        }
        else {
            alert("You are Minor!!")
        }
    }

    function handleClick() {
        alert("Button Clicked!!")
    }


    return (
        <>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">

                            <h1 className="display-4 fw-bold mb-3">
                                Build Something Amazing
                            </h1>

                            <p className="lead text-secondary mb-4">
                                Create beautiful, modern and responsive websites with
                                React and Bootstrap. Simple, fast and easy to customize.
                            </p>

                            <div className="d-flex justify-content-center gap-3">
                                <button className="btn btn-dark rounded-0 btn-lg" onClick={handleClick}>
                                    Get Started
                                </button>
                                <button className="btn btn-primary rounded-0 btn-lg" onClick={checkAge}>
                                    Check Age
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <article>
                <div className="container">
                    <div className="row">
                        {products.map((item, index)=>(
                            <div className="col-md-3">
                                <div className={`p-2 my-2 ${item.stock >= 20 ? "bg-primary-subtle" : "bg-danger-subtle"}`}>
                                    <span>{item.stock >= 20 ? "In Stock" : "Out of Stock"}</span>
                                    <h3 className="card-title">{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )

}

export default Home;