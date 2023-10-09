import './card.css'

const Card = ({title, introduction, link}) => {

  return(
      <div className="totalDivCard">
        <h1>{title}</h1>
        <p>{introduction}</p>
      </div>
  )
}

export default Card