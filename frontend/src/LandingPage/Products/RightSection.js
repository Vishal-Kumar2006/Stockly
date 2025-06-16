function RightSection({
  imageURL,
  productName,
  productDesc,
  learnMore,
}) {
  return (
    <div className="container" style={{marginTop:"6rem"}}>
      <div className="row mt-5">
        <div className="col-6 mt-5 ">
          <h1 className="fs-2 text-muted">{productName}</h1>
          <p className="text-muted mt-4 fs-5">{productDesc}</p>
          <a
            className="col-6 font-weight-bold "
            href={learnMore}
            style={{ textDecoration: "none" }}
          >
            Learn more 
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
