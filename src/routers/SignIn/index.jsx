import React, { useState } from 'react'
import { SignInStyleContent } from './styles'


import logo from '../../assets/SVG/logo.svg'
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })



  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Email: ' + formData.email)
    console.log('Senha: ' + formData.password)
  }


  return (
    <SignInStyleContent>
      <div className='logo_conteiner'> <Link to='/'><img src={logo} alt="logo" /> </Link></div>
      <h3>
        Connect now!
      </h3>
      <form onSubmit={handleSubmit} className='form_conteiner'>

        <label >
          Email
          <input type="email" name='' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        </label>
        <label >
          Password
          <input type="password" name='' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </label>
       
        <button>Sign In</button>
      </form>

      <div className='create_acc'><p>Nao tem uma conta?</p> <Link to='/signup' className='link_create_acc'>Sign Up</Link></div>
    </SignInStyleContent>
  )
}

export default SignIn