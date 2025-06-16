function name(params) {
  return (
    <div className="container border-top">
      <div className="row text-center mt-5">
        <div className="col-8">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5"> Brockrage Cost </h3>
          </a>

          <ul className="text-start text-muted" style={{fontSize:"0.9rem"}}>
            <li className="p-1">
              {" "}
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.{" "}
            </li>
            <li className="p-1">Digital contract notes will be sent via e-mail. </li>
            <li className="p-1">
              Physical copies of contract notes, if required, shall be charged
              20 per contract note. Courier charges apply.{" "}
            </li>
            <li className="p-1">
              {" "}
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower)
            </li>
            <li className="p-1">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).{" "}
            </li>
            <li className="p-1">
              If the account is in debit balance, any order placed will be
              charged 40 per executed ord instead of 20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            <h3 className="fs-5"> List of Charges </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default name;
