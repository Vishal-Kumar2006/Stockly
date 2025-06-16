import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor:"white" , position:"sticky" , top:"0"}}
    >
      <div className="container">
        <Link to={"/"}>
          <img src="media/Images/logo.svg" style={{ width: "25%" }} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/user/signup"}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  aria-current="page" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page"  to={"/product"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " aria-current="page"  to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page"  to={"/support"}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="#">
                  <i className="fa-solid fa-bars fs-5"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
