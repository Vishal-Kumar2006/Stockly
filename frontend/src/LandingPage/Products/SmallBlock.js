function SmallBlock({ imageURL, description }) {
  return (
    <div className="container m-3">
      <img src={imageURL} style={{ width: "12rem", marginBottom:"1rem" }} />
      <p
        className="text-muted "
        style={{ fontSize: "0.8rem", fontWeight: "630", padding:"0 5% 0 5%", color:"InactiveCaptionText"}}
      >
        {description}
      </p>
    </div>
  );
}

export default SmallBlock;
