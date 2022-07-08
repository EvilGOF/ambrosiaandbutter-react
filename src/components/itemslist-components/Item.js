const Item = (props) => {
  return (
    <div className="item-container">
      <div className="item-card">
        <img src={props.img} width="200px" height="220px" alt={props.alt}></img>
        <h5>{props.name}</h5>
        <p>
          $<span>{props.price}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
