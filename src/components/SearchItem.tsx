import React, { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails"
import { itemInfo, seriesInfo, searchItem } from "../types/common.types";
import { fetchItemInfo } from "../services/apiServices";
import "./SearchItem.css";

const Item: React.FC<{ item: searchItem }> = ({ item }) => {
  const [itemClicked, setItemClicked] = useState(false);

  const handleDetailClose = () => {
    setItemClicked(false);
  };
  return (
    <>
      <div className="item-item-container" onClick={() => setItemClicked(true)}>
        <div className="item-img-container">
          {item.Poster != "N/A" && <img src={item.Poster} />}
          {item.Poster == "N/A" && <div>No Image</div>}
        </div>
        <div className="item-info-container">
          <p className="item-title">{item.Title}</p>
        </div>
      </div>
      {itemClicked && (
        <ItemDetails imdbID={item.imdbID} detailClosed={handleDetailClose} />
      )}
    </>
  );
};

export default Item;
