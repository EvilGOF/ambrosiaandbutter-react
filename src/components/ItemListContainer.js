import React from "react";
import ItemList from "./itemslist-components/ItemList";

const ItemListContainer = () => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Productos destacados</h2>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
