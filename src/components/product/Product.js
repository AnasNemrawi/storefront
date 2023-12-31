import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import {get}from "../../Store/productReducer"
import {CART}from "../../Store/cartReducer"
import { Link } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const product = useSelector(state => state)
  const toast = useToast();
  useEffect(() => {
    axios
    .get(`https://api-js401.herokuapp.com/api/v1/products`)
    .then((data) => {
      dispatch(get(data.data.results));
      // props.office("food")
      console.log(product,"00000000000");
    })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [product.cart.cart]);
console.log(product,"cart");
  const { theProducts, category } = product.product;
  let rederPrduct = [];

  if (theProducts.length === 0) {
    rederPrduct = category;
  } else {
    rederPrduct = theProducts;
  }
  // console.log(rederPrduct);
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {rederPrduct.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                 
                >
                  <img
                    src={`https://source.unsplash.com/random?${card.name}`}
                    alt={card.name}
                  />
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    category: {card.category}
                  </Typography>
                  <Typography>product Name:{card.name}</Typography>
                  <Typography>price:{card.price}</Typography>
                  <Typography>stock:{card.inStock}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      toast({
                        title: "Product Added To Cart Successfully.",
                        description: `${card.name}`,
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                      dispatch(CART(card));
                      // props.stock(card);
                    }}
                  >
                    Add To Cart
                  </Button>

                <Link to={`product/${card._id}`}> <Button size="small" >Details</Button></Link>  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}



export default Product;
