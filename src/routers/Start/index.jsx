import React from 'react'
import { Conteiner } from './styles'
import img from '../../assets/JPG/monk-moon-city.jpg'
import logo from '../../assets/SVG/logo.svg'
import { Link } from 'react-router-dom'

const Start = () => {
 


  return (
    <Conteiner>
      <img src={logo} className="logo" alt="" />
      <img src={img} alt="" />


      <div className='button_conteiner'>
        <div className='animation'></div>
        <Link to='/signin' className='button'>Start</Link>
        <div className='animation'></div>
      </div>

    </Conteiner>
  )
}

export default Start