import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { getCartByUserId } from "../../services/CartService";
// const data = [
//   {
//     id: 0,
//     name: "testt estte sttest",
//     price: "20",
//     description:
//       "test test test test test test test test test test test test  test test test test test test test test ",
//     quantity: 0,
//     imageUrls: [
//       "https://raw.githubusercontent.com/adrianhajdin/ecommerce_sanity_stripe/main/public/assets/earphones_a_1.webp",
//     ],
//   },
//   {
//     id: 1,
//     name: "test",
//     price: "10",
//     description: "test",
//     quantity: 0,
//     imageUrls: [
//       "https://raw.githubusercontent.com/adrianhajdin/ecommerce_sanity_stripe/main/public/assets/earphones_a_1.webp",
//     ],
//   },
//   {
//     id: 2,
//     name: "test",
//     price: "10",
//     description: "test",
//     quantity: 0,
//     imageUrls: [
//       "https://raw.githubusercontent.com/adrianhajdin/ecommerce_sanity_stripe/main/public/assets/earphones_a_1.webp",
//     ],
//   },
// ];
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Cart = () => {
  const navigate = useNavigate();
  const [totalCount, setToalCount] = useState(0);
  const [totalQuantity, setToalQuantity] = useState(0);
  const [data, setData] = useState([]);
  const totalCalculate = () => {
    let total = 0;
    let count = 0;
    for (let index = 0; index < data.length; index++) {
      total = total + parseInt(data[index].price);
      count++;
    }
    setToalCount(total);
    setToalQuantity(count);
    
  };

  useEffect(()=>{
    function loadAllItems(){
      getCartByUserId(1).then(({ data }) => {
        setData(data);
        totalCalculate();
      });
    }
    loadAllItems();
    
  },[]);
  
  const buyNow = () =>{
    navigate("/payment");
  }
  return (
    <div>
      <div>
        <table className="tablecart">
          <tr>
            <td className="cartColumn1">
              <div>
                {Array.from(data).map((item, index) => (
                  <Paper
                    sx={{
                      p: 2,
                      margin: "auto",
                      maxWidth: 500,
                      flexGrow: 1,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                    className="cartItemCardStyling"
                  >
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                          <Img alt="complex" src={item.imageUrls[0]} />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                            >
                              {item.name}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                            >
                              {item.description.slice(0, 80)}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              sx={{ cursor: "pointer" }}
                              variant="body2"
                            >
                              Remove
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" component="div">
                            Rs. {item.price}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                ))}
              </div>
            </td>
            <td className="cartColumn2">
              <div>
                <Stack spacing={2} direction="row">
                  <Stack direction="column">
                    <h5>Total Item Count</h5>
                  </Stack>
                  <Stack direction="column">
                    <h5>{totalQuantity}</h5>
                  </Stack>
                </Stack>
                <Stack spacing={2} direction="row">
                  <Stack direction="column">
                    <h5>Total Amount</h5>
                  </Stack>
                  <Stack direction="column">
                    <h5>Rs. {totalCount}</h5>
                  </Stack>
                </Stack>
              </div>
              <Button variant="contained" onClick={buyNow}>
                Buy Now
              </Button>
            </td>
          </tr>
        </table>
      </div>
      <br />
    </div>
  );
};

export default Cart;
