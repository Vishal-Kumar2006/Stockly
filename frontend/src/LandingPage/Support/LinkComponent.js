function LinkComponent({ heading, links }) {
  return (
    <div>
      <div className="row">
        <a className="fs-5 text-muted" href="/" style={{textDecoration:"none", color:"black"}}>
          {heading[0]} {heading[1]}
        </a>
        <ul className="mt-2 text-muted">
          {links.map((item, index) => {
            return (
              <>
                <li className="p-1 text-muted" style={{listStyle:"none", }} >
                  <a href="" style={{textDecoration:"none"}}>{item}</a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LinkComponent;
