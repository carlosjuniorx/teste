import Link from "next/link"

const Header = ({textHeader}) =>{
  return(
    <div className='header'>        
        <Link className='link' href={'/home'}><h1>{textHeader}</h1></Link>
    </div>
  )
}

export default Header