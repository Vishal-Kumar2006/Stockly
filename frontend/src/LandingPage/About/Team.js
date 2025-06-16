function Team(params) {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="text-muted text-center">People</h1>
      </div>
      <div className="row">
        <div className="col-6 text-center text-muted ">
          <img
            src="media/Images/VishalImage.jpg"
            style={{ borderRadius: "50%", width: "55%" }}
          ></img>
          <h4 className="mt-4">Vishal Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles hefaced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on  
            <a href="/" style={{ textDecoration: "none" }}> Homepage </a>
            / 
            <a href="/about" style={{ textDecoration: "none" }}> TradingQnA </a>
            / 
            <a href="/trending" style={{ textDecoration: "none" }}> Twitter </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
