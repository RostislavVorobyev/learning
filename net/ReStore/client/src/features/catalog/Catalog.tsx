import { Product } from '../../app/models/Product';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ProductList from './ProductList';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5000/api/Products')
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: `prod ${prev.length + 1}`,
        price: 300,
        brand: 'some brand',
        description: 'some descr',
        pictureUrl: 'http://picsum.photos/200',
      },
    ]);
  }

  return (
    <>
      <h1>Catalog</h1>
      <ProductList products={products} />
      <Button onClick={addProduct}>Add</Button>
    </>
  );
};

export default Catalog;
