function Stats() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-5">
          <h1 className="fs-2 text-muted">Trust with confidence</h1>

          <h2 className="fs-4 mt-5 text-muted">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4 mt-5 text-muted">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h2 className="fs-4 mt-5 text-muted">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-5 text-muted" >Do better with money</h2>
          <p className="text-muted">
            With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't
            just facilitate transactions, but actively help you do better with
            your money.
          </p>
        </div>

        <div className="col-7">
          <img src="media/Images/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center">
            <a href="" className="mx-4 " style={{textDecoration:"none"}}>
              Explore our products  <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="mx-4" style={{textDecoration:"none"}}>
              Try Kite demo  <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
