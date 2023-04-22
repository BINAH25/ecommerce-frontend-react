import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch,useSelector } from 'react-redux'
import { listProducts } from '../action/ProductActions'
const HomePage = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading,products} = productList
  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])
  return (
    <div>
      <h1>Latest product</h1>
      {
        loading ? <h2>Loading......</h2>
        : error ? <h3>{error}</h3>
        :
        <Row>
        {products.map(product =>(
            <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product}/>
            </Col>
        ))}
          </Row>
      }
      
    </div>
  )
}

export default HomePage
