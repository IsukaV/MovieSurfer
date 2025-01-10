import React, {useState , useEffect} from "react";
import { searchItem, itemInfo, seriesInfo } from "../types/common.types";
import { fetchItemInfo } from "../services/apiServices";

const ItemDetails: React.FC<{
    imdbID: string;
    detailClosed: () => void;
  }> = ({ imdbID, detailClosed }) => {
    const [data, setData] = useState<itemInfo | seriesInfo | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
  
      const getitemInfo = async () => {
        try {
          const itemData = await fetchItemInfo(imdbID);
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
                <p className="item-title-txt" data-testid="item-name-year">
                  {data.Title} - {data.Year}{" "}
                </p>
                <p>{data.Plot}</p>
              </div>
            )}
            {data?.Released && (
              <div>
                <p style={{ fontWeight: "bold", paddingTop: 10 }} data-testid= "released-date">Released on</p>
                <p>{data.Released}</p>
              </div>
            )}
            {data?.Actors && (
              <div>
                <p style={{ fontWeight: "bold", paddingTop: 10 }} data-testid = "actors">Actors</p>
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
                <p style={{ fontWeight: "bold", paddingTop: 10 }} data-testid = "total-seasons">
                  Total seasons
                </p>
                <p>{data.totalSeasons}</p>
              </div>
            )}
          </div>
        )}
        <button className="close-item-details" onClick={detailClosed} role="close-button">
          Close
        </button>
      </div>
    );
  };
  
  export default ItemDetails;