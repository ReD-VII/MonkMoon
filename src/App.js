
// REACT
import React, { useEffect, useState } from 'react';

// STYLES
import './styles/App.css';
import { LayoutStyles } from './styles/Appstyled';

// ROUTER
import { Link, Outlet, useNavigate } from 'react-router-dom';

// HOOKS
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthentication } from './hook/useAuthentication';

// CONTEXT
import { AuthProvider } from './context/AuthContext';

// COMPONENTS
// import Menu from './components/Menu';
import Loader from './components/Loader';

// IMG
import logo from './assets/SVG/logo.svg'






function App() {
  const history = useNavigate();
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loading = user === undefined // se user for igual a undefined entao loading e verdadeiro
  /**
   *  Isso faz com que o loading seja ativado, logo loading e true caso user seja undefined    
   */

  // MONITORAMENTO DE USUARIO USANDO O onAuthStateChanged()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  // CASO O LOADING SEJA REAL ELE MOSTRA O LOADER COMPONENT
  if (loading) {
    return <Loader />
  }

  // REDIRECIONAMENTO PARA PAGINA START CASO O USUARIO NAO ESTEJA LOGADO
  if(!user){
    setTimeout(() => {
      history('/start');
    }, 0);
  }









  // JSX
  return (
    <AuthProvider value={{ user }}>

      <div className="App">

        <LayoutStyles>

          <header>
            <div className='box'>
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className='box'></div>
            <div className='box'>




              {/* MENU  */}





            </div>
          </header>

          <main>
            <Outlet className='Outlet' />
          </main>

          <footer>

          </footer>

        </LayoutStyles>

      </div>

    </AuthProvider>
  );
}

export default App;
