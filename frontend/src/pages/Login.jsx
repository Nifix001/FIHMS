import React from 'react'
import logo from '../assets/Frames.png'
import { Form } from 'react-router-dom'
import BasicCard from '../components/BasicCard'


const Login = () => {
  return (
    <React.Fragment>
      <section className = 'w-full h-full'>
        <BasicCard  signUp = { false } />
      </section>
    </React.Fragment>
  )
}

export default Login
