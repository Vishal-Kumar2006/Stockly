import SmallBlock from "./SmallBlock";

function Universe(params) {
  return (
    <div className="container text-center" style={{ marginTop: "8rem" }}>
      
      <div className="row mb-5">
        <p className="font-weight-normal fs-4 text-muted">
          Want to know more about our technology stack? Check out the{" "}
          <a style={{ textDecoration: "none" }} href="/">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <div className="row">
        <h2 className="mt-4 mb-4 text-muted">The Zerodha Universe</h2>
        <p className="fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>{" "}
      </div>

      <div className="row mt-5">
        <div className="col-4 ">
          <SmallBlock
            imageURL="media/Images/zerodhaFundhouse.png"
            description="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
          />
        </div>
        <div className="col-4">
          <SmallBlock
            imageURL="media/Images/sensibullLogo.svg"
            description="Options trading platform that lets you
              create strategies, analyze positions, and examine
              data points like open interest, FII/DII, and more.
              "
          />{" "}
        </div>
        <div className="col-4">
          <SmallBlock
            imageURL="media/Images/tijori.svg"
            description="Investment research platform
              that offers detailed insights on stocks,
              sectors, supply chains, and more."
            />
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-4">
          <SmallBlock
            imageURL="media/Images/streakLogo.png"
            description="Systematic trading platform
              that allows you to create and backtest
              strategies without coding."
          />
        </div>
        <div className="col-4">
          <SmallBlock
            imageURL="media/Images/smallcaseLogo.png"
            description="Thematic investing platform
              that helps you invest in diversified
              baskets of stocks on ETFs."
          />
        </div>
        <div className="col-4">
          <SmallBlock
            imageURL="media/Images/dittoLogo.png"
            description="Personalized advice on life
              and health insurance. No spam
              and no mis-selling."
          />
        </div>
      </div>

      <button className="btn btn-primary fs-4 m-5" >
        <a href="/signup" style={{color:"white", textDecoration:"none"}}>Sign up for free</a>
      </button>

    </div>
  );
}

export default Universe;
