import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../action/UserActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row,Col,Form,Button} from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div>
      this the login screen
    </div>
  )
}

export default LoginPage
