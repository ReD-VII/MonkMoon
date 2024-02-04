import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration';

// ROTAS
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom"


// PAGINAS
import Home from './routers/Home';
import SignUp from './routers/SignUp';
import NotFound from './routers/NotFound';
import SignIn from './routers/SignIn';
import Account from './routers/Account';
import Start from './routers/Start';
import TestPage from './routers/Test';
import { useAuthentication } from './hook/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from './components/Loader';

const PrivatePage = ({ Component }) => {
  const { auth } = useAuthentication();
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  const [compActive, setCompActive] = useState(<Loader />);

  // MONITORAMENTO DE USUARIO USANDO O onAuthStateChanged()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      setUser(userData);
      if (!userData) {
        navigate('/start');
        setCompActive(<Loader />);
      } else {
        setCompActive(<Component />);
      }
    });

    // Certifique-se de limpar o efeito quando necessário
    return () => {
      unsubscribe();
    };
  }, [auth, navigate, Component]);

  return compActive;
};

const routers = createBrowserRouter([
  { //Layout
    element: <App />,
    children: [
      {
        path: '/',
        element: <PrivatePage Component={Home} />
      },
      {
        path: 'acount',
        element: <PrivatePage Component={Account} />
      },
      {
        path: 'test',
        element: <PrivatePage Component={TestPage} />
      },
    ]
  },

  // Fora do Layout
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: 'start',
    element: <Start />
  },
  {
    path: '*',
    element: <NotFound />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

serviceWorkerRegistration.unregister();
