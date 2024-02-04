
import React, { useEffect, useState } from 'react'
import { Conteiner } from './styles'






const NotificationMessage = ({ type, msg, active }) => {


  const [visible, setVisible] = useState(false)


  useEffect(() => {

    if (msg) {
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        active()
      }, 5000); // Tempo ajustável conforme necessário
    }

  }, [msg])



  useEffect(() => {
    console.log(`
      COMPONENT: NotificationMessage
      STATE: Acionado
      TYPE: ${type}
    `)
  }, [type])



  

  return (
    <>
      { visible &&

        <Conteiner>
          <div className='animation'></div>

          <p className='msg'>{msg}</p>

          <div className='animation'></div>
        </Conteiner>
      }
    </>
  )
}

export default NotificationMessage