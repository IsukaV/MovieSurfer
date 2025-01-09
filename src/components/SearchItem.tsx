import React, { useState, useEffect } from "react";
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
        <ItemDetails item={item} detailClosed={handleDetailClose} />
      )}
    </>
  );
};

const ItemDetails: React.FC<{
  item: searchItem;
  detailClosed: () => void;
}> = ({ item, detailClosed }) => {
  const [data, setData] = useState<itemInfo | seriesInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getitemInfo = async () => {
      try {
        const itemData = await fetchItemInfo(item.imdbID);
        setData(itemData);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getitemInfo();
  }, []);

  return (
    <div className="item-details-container">
      {loading && (
        <div className="item-details" style={{ textAlign: "center" }}>
          <p>Loading</p>
        </div>
      )}

      {!loading && (
        <div className="item-details">
          {data?.Plot && (
            <div>
              <p className="item-title-txt">
                {data.Title} - {data.Year}{" "}
              </p>
              <p>{data.Plot}</p>
            </div>
          )}
          {data?.Released && (
            <div>
              <p style={{ fontWeight: "bold", paddingTop: 10 }}>Released on</p>
              <p>{data.Released}</p>
            </div>
          )}
          {data?.Actors && (
            <div>
              <p style={{ fontWeight: "bold", paddingTop: 10 }}>Actors</p>
              <p>{data.Actors}</p>
            </div>
          )}
          {data?.Director && (
            <div>
              <p style={{ fontWeight: "bold", paddingTop: 10 }}>Director</p>
              <p>{data.Director}</p>
            </div>
          )}
          {data?.Genre && (
            <div>
              <p style={{ fontWeight: "bold", paddingTop: 10 }}>Genre</p>
              <p>{data.Genre}</p>
            </div>
          )}
          {data?.totalSeasons && (
            <div>
              <p style={{ fontWeight: "bold", paddingTop: 10 }}>
                Total seasons
              </p>
              <p>{data.totalSeasons}</p>
            </div>
          )}
        </div>
      )}
      <button className="close-item-details" onClick={detailClosed}>
        Close
      </button>
    </div>
  );
};

export default Item;
