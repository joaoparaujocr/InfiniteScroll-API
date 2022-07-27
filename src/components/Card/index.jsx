import CardStyle from "./style"

const Card = ({name, status, species, image }) => {
  return (
    <CardStyle status={status.toLowerCase()}>
      <img src={image} alt="" />
      <h2>{name.length > 13 ? `${name.slice(0, 14)}...` : name}</h2>
      <p>{species}</p>
    </CardStyle>
  )
}

export default Card