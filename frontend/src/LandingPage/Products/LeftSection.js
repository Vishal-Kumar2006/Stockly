function LeftSection({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  GooglePlay,
  AppStore,
}) {
  return (
    <div className="container " style={{marginTop:"6rem"}}>
      <div className="row mt-5">
        <div className="col-8">
          <img src={imageURL} />
        </div>
        <div className="col-4 mt-5 ">
          <h1 className="fs-2 text-muted">{productName}</h1>
          <p className="text-muted mt-4 fs-5">{productDesc}</p>
          <div className="d-flex justify-content-start fs-6">
            <a
              className="col-6"
              href={tryDemo}
              style={{ textDecoration: "none" }}
            >
              Try Demo
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="col-6"
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="d-flex fs-1 m-1 ">
            <a href={GooglePlay} className="col-6 ">
              <img src="media/Images/googlePlayBadge.svg" style={{width:"85%"}} />
            </a>
            <a href={AppStore}  className="col-6  justify-content-start">
              <img src="media/Images/appStoreBadge.svg" style={{width:"85%"}}  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
