import React ,{useState,useEffect}from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useDispatch,useSelector } from 'react-redux'
import { detailProduct } from '../action/ProductActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const ProductPage = () => {
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetail)
    const {loading,error,product} = productDetails
    ///
    useEffect(()=>{
        dispatch(detailProduct(id))
    },[id])
  return (
    <div>
        <Link to='/' className='btn btn-light my-3'> Go Back</Link>
        {
            loading
            ? <Loader/>
            : error
                ? <Message variant='danger'>{error}</Message>

            :
            (
                <Row>
            <Col md={6}>
            <Image src={product.image} alt={product.name} fluis />
            </Col>
            <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                </ListGroup.Item>

                <ListGroup.Item>
                    Price: {product.price}
                </ListGroup.Item>

                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col><strong>${product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col><strong>{product.countInStock > 0?'In Stock':"Out of Stock"}</strong></Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock == 0}>Add to Cart</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
            )
        }
        
    </div>
  )
}

export default ProductPage
