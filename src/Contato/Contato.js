import React from 'react'
import { Helmet } from 'react-helmet'
import style from './Contato.module.css'

const Contato = () => {

  return (
    <div className={style.container}>
      <Helmet>
        <title>My Store | Contato</title>
      </Helmet>
      <img src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/smartwatch-2.jpg" alt="Foto de um Smartwatch" width="300px"/>
      <div className={style.contact}>
        <h2>Entre em contato</h2>
        <p>- renatasouza.dev@gmail.com</p>
        <p>- (11) 99999-9999</p>
        <p>- Rua Aqui Perto, 300</p>
      </div>
    </div>
  )
}

export default Contato