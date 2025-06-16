function name(params) {
  return (
    <div className="container ">
      <div className="row text-center text-muted  mt-5 mb-5">
        <h1>Charges</h1>
        <p className="fs-4 mt-3 mb-5 ">List of all charges and taxes</p>
      </div>

      <div className="row text-center">
        <div className="col-4 p-5 ">
          <img src="media/Images/pricingEquity.svg" />
          <h1 className="fs-3 text-muted mt-4 mb-4 ">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5 p-0 m-0">
          <img src="media/Images/intradayTrades.svg" />
          <h1 className="fs-4 text-muted mt-4 mb-4 ">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/Images/pricingMF.svg" />
          <h1 className="fs-3 text-muted mt-4 mb-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default name;
