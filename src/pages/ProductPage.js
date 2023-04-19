import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
const ProductPage = () => {
    const params = useParams();
    const id = params.id;
    const product = products.find((p)=> p._id == id)
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductPage
