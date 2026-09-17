import { Links } from "react-router";


function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to="/" className="navbar-brand">Website Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                              <li className="nav-item">
                                <Link to="/about" className="nav-link " aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link " aria-current="page">Product</Link>
                            </li>
                            <li className="nav-item">
                               <Link to="/contact" className="nav-link " aria-current="page">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;