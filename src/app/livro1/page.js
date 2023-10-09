'use client'

import "./Livro.css"
import Header from "../components/header/Header"
import { useState, useEffect } from "react"
import {Pagina1, Pagina2} from "./paginas/paginas"

const Livro1 = () =>{
  const [pagina, setPagina]  = useState(0)

  const paginas = ['bemvindo', <Pagina1/>, <Pagina2/>]

  function viraPagina (esquerdaOuDireita) {
    if (esquerdaOuDireita == 'd'){ 
      if (pagina < paginas.length - 1)     
        setPagina(pagina + 1)
    }
    else
      if (pagina > 0)
        setPagina(pagina - 1)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagina]);

  return(
      <div className="conteinerLivro">
        <Header textHeader={"Voltar"}/>         
        <div className="pagina">
          <h1 className="title">Titulo do Livro</h1>
            {paginas[pagina]}     
          <div className="divPagination">
            <h3 onClick={()=> viraPagina('e')} className="next">&#8678;</h3>
            <h3>Pagina {pagina}</h3>
            <h3 onClick={()=> viraPagina('d')} className="next">&#8680;</h3>
          </div>
        </div>
             
      </div>
  )
}

export default Livro1