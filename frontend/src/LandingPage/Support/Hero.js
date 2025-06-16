function Hero(params) {
  return (
    <section
      className="container-fluid bg-primary"
      style={{ margin: "0", padding: "3rem 6rem" }}
    >
      <div className="container">
        
        <div className="row text-white">
          <div className="col-6 justify-content-start">
            <h3 className="fs-4 ">Support Portal</h3>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <a href="" className="text-white">
              {" "}
              Track tickets{" "}
            </a>
          </div>
        </div>

        <div className="row mt-5 d-flex">
          <div className="col-7">
            <p className="fs-4 text-white text-weight-100">
              Search for an answer or browse help topics to create a ticket
            </p>
            <input
              style={{border:"none", borderRadius:"0.2rem"}}
              className="w-100 p-2 br-2 fs-5 border-none"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
            />
            <div className="fs-5 mt-2">
               <a href="" className="text-white">
              Track Account Opening
            </a>{" "}
            <a href="" className="text-white ">
              Track segment Activation
            </a>{" "}
            <a href="" className="text-white">
              Intraday margins
            </a>{" "}
            <a href="" className="text-white">
              Kite user manual
            </a>{" "}
            </div>
           
          </div>

          <div className="col-5 " style={{paddingLeft:"3rem"}}>
            <p className="fs-4 text-white text-weight-100">Featured</p>
            <div className="m-3">
              <ol className="text-white fs-6">
                <li className="p-2">
                  <a href="" className="text-white">
                    Introduction of new F&O contracts on 9 individual securities
                  </a>
                </li>
                <li className="p-3" >
                  <a href="" className="text-white">
                    Rights Entitlements listing in May 2025
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
