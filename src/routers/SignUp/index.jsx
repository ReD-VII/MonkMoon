import React, { useEffect, useState } from 'react'
import { SignInStyleContent } from './styles'


import logo from '../../assets/SVG/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hook/useAuthentication';
import NotificationMessage from '../../components/NotificationMessage';
import { onAuthStateChanged } from 'firebase/auth';

const SignUp = () => {

  const [msgError, setMsgError] = useState(false)
  const [user, setUser] = useState(undefined)


  const [isChecked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: ''
  })

  const { createUser, error: authError, loading, msgServer, msgType, auth } = useAuthentication()



  const navigate = useNavigate();
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })


  }, [auth])

  useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [user])

  












  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (isChecked) {
      console.log('Checkado!')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsgError(false)



    if (formData.password !== formData.confPassword) {
      setMsgError('As senhas nao sao iguais.')
    } else {

      const res = await createUser(formData)


    }





  }

  const msgErroActive = () => {
    setMsgError(false)
  }



  useEffect(() => {
    if (authError) {
      setMsgError(authError)
    }
  }, [authError])
  useEffect(() => {
    setMsgError(false)
  }, [formData])
  useEffect(() => {
    setMsgError(msgServer)
  }, [msgServer])

  return (
    <SignInStyleContent>
      {msgError &&
        <NotificationMessage msg={msgError} active={msgErroActive} />
      }

      <div className='logo_conteiner'> <Link to='/'><img src={logo} alt="logo" /> </Link></div>

      <h3>
        Connect now!
      </h3>

      <form onSubmit={handleSubmit} className='form_conteiner'>
        <label >
          Nome
          <input type="text" name='' onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </label>
        <label >
          Email
          <input type="email" name='' onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </label>
        <label >
          Password
          <input type="password" name='' onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        </label>
        <label >
          Confirm Password
          <input type="password" name='' onChange={(e) => setFormData({ ...formData, confPassword: e.target.value })} required />
        </label>
        <label className='conteiner_checkbox'>
          Receber newsletter?
          <input
            type="checkbox"
            className='checkbox'
            onChange={handleCheckboxChange}
          />
        </label>
        {!loading && (<button className=''>Sign Up</button>)}
        {loading && (
          <button className='activeLoad'>Sign Up</button>
        )}

      </form>

      <div className='create_acc'><p>Ja tem uma conta?</p> <Link to='/signin' className='link_create_acc'>Sign In</Link></div>

    </SignInStyleContent>
  )
}

export default SignUp