import React from 'react';
import { useParams } from 'react-router-dom';
import './Item.css'
import Homebanner from '../../assets/assets/earphones_a_1.webp'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

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

    const addToCart = ()=>{
        navigate("/cart")
    }
    return (
        <div className='bodyItemStyling'>
            <div>
                <h2>{id}</h2>
            </div>
            <div>
                <table className='itemTableStyling'>
                    <tr>
                        <td className='column1Styling'>
                        <img src={data2.imageUrls[0]} className="itemBannerStyling" alt="logo" />
                        </td>
                        <td className='column2Styling'>
                            <div>
                                <h3>{data2.name}</h3>
                            </div>
                            <div>
                                <h5>Details:</h5>
                                <p>{data2.description}</p>
                            </div>
                            <div>
                                <h5 className='priceStyling'>Rs. {data2.price}</h5>
                            </div>
                            <div className='btnGroupItem'>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={addToCart}>Add to cart</Button>
                                <Button variant="outlined">Buy now</Button>
                                </Stack>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Item;
