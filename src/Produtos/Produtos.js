import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Produtos.module.css'

const Produtos = () => {
  const [ produtos, setProdutos ] = useState()

  useEffect(() => {
    async function fetchProdutos() {
      const resposta = await fetch('https://ranekapi.origamid.dev/json/api/produto')
      const produtos = await resposta.json()
      setProdutos(produtos)
    }
    fetchProdutos()
  }, [])

  return (
    <div className={style.container}>
      {produtos ? (
        <>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <Link to={`/produtos/${produto.id}`}>
                <img src={produto.fotos[0].src} alt={produto.nome} width="250px"/>
              </Link>
              <h2>{produto.nome}</h2>
            </li>
          ))}
        </ul>
      </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Produtos
