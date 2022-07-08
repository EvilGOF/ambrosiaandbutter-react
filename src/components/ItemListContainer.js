import Item from "./itemslist-components/Item";
import pollo from "./components-img/pollobufalo.jpg";
import cookie from "./components-img/levaincookies.jpg";
import brownie from "./components-img/brownie.jpg";
import ItemCount from "./itemslist-components/ItemCount";

const ItemListContainer = () => {
  return (
    <div className="container-catalogo">
      <div className="item-card">
        <Item
          img={pollo}
          name="Pollo Frito con salsa Bufalo"
          price="2500"
          alt="pollo frito"
        />
        <ItemCount initial={1} stock={15} />
      </div>
      <div className="item-card">
        <Item img={cookie} name="Levain Cookies" price="1000" alt="cookies" />
        <ItemCount initial={1} stock={20} />
      </div>
      <div className="item-card">
        <Item img={brownie} name="Brownie" price="1700" alt="brownies" />
        <ItemCount initial={1} stock={10} />
      </div>
    </div>
  );
};

export default ItemListContainer;
