import Card from "../components/card/Card"
import Header from "../components/header/Header"
import Link from "next/link"

const PageHome = () =>{
  const textoLivro1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dicta. Corporis neque eius perspiciatis accusamus veritatis sunt, natus omnis quos sed. Autem, blanditiis. Magnam iste ipsam eaque doloremque veniam omnis. adipisicing elit. Fugit, dicta. Corporis neque eius perspiciatis accusamus veritatis sunt, natus omnis quos sed. Autem, blanditiis. Magnam iste ipsam eaque doloremque veniam omnis.unt, nat'
  return(
    <>
      <Header textHeader={'Histórias da Emilia'}/>
      <div className="divLivros">
        <Link className="link" href={'/livro1'}><Card title='Titulo do meu livro' introduction={textoLivro1}/> </Link>
        <Link className="link" href={'/livro1'}><Card title='Titulo do meu livro' introduction={textoLivro1}/> </Link>
        <Link className="link" href={'/livro1'}><Card title='Titulo do meu livro' introduction={textoLivro1}/> </Link>
        <Link className="link" href={'/livro1'}><Card title='Titulo do meu livro' introduction={textoLivro1}/> </Link>
      </div> 
    </>
  )
}

export default PageHome