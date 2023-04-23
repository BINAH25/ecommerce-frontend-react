import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../action/UserActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row,Col,Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
    
        setUser({ ...user, [name]: value });
      };
    
  return (
    <FormContainer>
      this the login screen
    </FormContainer>
  )
}

export default LoginPage
