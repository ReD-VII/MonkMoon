import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
const Home = () => {

  const { user } = useAuthValue()

  return (
    <>
      <div>Home</div>

      {user &&
        
        <h2>{user.displayName}</h2>
      }

    </>
  )
}

export default Home