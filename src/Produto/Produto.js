import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import style from './Produto.module.css'

const Produto = () => {
  const params = useParams()
  const [ produto, setProduto ] = useState()
  console.log(produto)

  useEffect(() => {
    async function fetchProduto() {
      const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      const produto = await resposta.json()
      setProduto(produto)
    }
    fetchProduto()
  }, [])

  return (
    <div className={style.container}>
      <Helmet>
        <title>My Store | Produto</title>
      </Helmet>
      {produto ? (
        <>
          <img src={produto.fotos[0].src} alt={produto.descricao} width="300px"/>
          <div className={style.productInfo}>
            <h2>{produto.nome}</h2>
            <span>R$ {produto.preco}</span>
            <p>{produto.descricao}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Produto
