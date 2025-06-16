import { Link } from "react-router-dom";

function NotFound(params) {
  return (
    <div className="container p-5">
        <h1 className="fs-1 text-muted">404 NotFound </h1>
        <p>Sorry, We couldn’t find the page you were looking for Visit </p>
        <Link to={"/"} style={{textDecoration:"none"}}>Zerodha’s home page</Link>
    </div>
  );
}

export default NotFound;