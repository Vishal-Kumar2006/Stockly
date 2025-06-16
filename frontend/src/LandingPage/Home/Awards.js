function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img src="media/Images/largestBroker.svg" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to ove 15% of all retail order
            volumes in India by daily trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 p-5">
              <ul>
                <li>Futures and Options </li>
                <li>Commodity derivatives </li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 p-5 " >
              <ul>
                <li>Stocks & IPOs </li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <img src="media/Images/pressLogos.png" style={{width:"90%"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
