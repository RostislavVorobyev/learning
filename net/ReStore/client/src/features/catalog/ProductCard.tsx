import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { Product } from '../../app/models/Product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary' }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{ sx: { fontWeight: 'bold' } }}
      ></CardHeader>
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: 'contain',
          bgcolor: 'primary.light',
        }}
        image={product.pictureUrl}
        title={product.name}
        component="img"
      />
      <CardContent>
        <Typography color="secondary" gutterBottom variant="h5">
          {`${(product.price / 100).toFixed(2)}$`}
        </Typography>
        <Typography variant="body2">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Add To Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`}>
          View
        </Button>
      </CardActions>
    </Card>

    // <ListItem>

    //   <ListItemAvatar>
    //     <Avatar src={product.pictureUrl}></Avatar>
    //   </ListItemAvatar>
    //   <ListItemText>
    //     {product.name} - {product.price}
    //   </ListItemText>
    // </ListItem>
  );
};

export default ProductCard;
