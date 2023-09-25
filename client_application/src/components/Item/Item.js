import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Item.css";
import Homebanner from "../../assets/assets/earphones_a_1.webp";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getItemById, getAllItems } from "../../services/itemService";

const data2 = {
    "id": 0,
    "name": "testt estte sttest",
    "price": "test",
    "description": "test",
    "quantity": 0,
    "imageUrls": ["https://raw.githubusercontent.com/adrianhajdin/ecommerce_sanity_stripe/main/public/assets/earphones_a_1.webp"]
  }
const Item = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [data1, setData] = useState({});

  useEffect(()=>{
    function loadAllItems(){
        getItemById(1).then(({ data }) => {
            console.log("first",data)
        setData(data)
        data1.imageUrls = data.imageUrls[0]
        console.log("first1",data1)
      });
    }
    loadAllItems()
  },[]);

  const addToCart = () => {
    navigate("/cart");
  };

  
  return (
    <div className="bodyItemStyling">
      <div>
      </div>
      <div>
        <table className="itemTableStyling">
          <tr>
            <td className="column1Styling">
              <img
                src={data1.imageUrls}
                className="itemBannerStyling"
                alt="logo"
              />
            </td>
            <td className="column2Styling">
              <div>
                <h3>{data1.name}</h3>
              </div>
              <div>
                <h5>Details:</h5>
                <p>{data1.description}</p>
              </div>
              <div>
                <h5 className="priceStyling">Rs. {data1.price}</h5>
              </div>
              <div className="btnGroupItem">
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={addToCart}>
                    Add to cart
                  </Button>
                  <Button variant="outlined">Buy now</Button>
                </Stack>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Item;
