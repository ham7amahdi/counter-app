import React from 'react';
// import ProductList from '../components/ProductList
import UserForm from '../components/From';
import Display from '../components/display';
import ProductList from '../components/ProductList'; // Ensure this path is correct
import '../App.css'; // Assuming you have some global styles
import '../components/Display.css'; // Assuming you have some global styles

function Product(){

  return(
    <>
    <ProductList />
    <UserForm />
    <Display />
    </>
  );   
}

export default Product;