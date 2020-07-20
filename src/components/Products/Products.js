import React from 'react'
import products from '../../utils/data/products.json';
import { Container } from '../../utils/styles/globalStyle';
import Product from '../Product/Product';


/**
 * @description - Afficher la liste des produits
 */
const Products = () => {
  return (
    <Container as="section" pos="space-around">
      <Product data={products} />
    </Container>
  )
};

export default Products;