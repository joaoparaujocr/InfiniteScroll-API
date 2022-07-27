import Card from "../Card";
import List from "./style";

const ListCard = ({ listCharacter }) => (
  <List>
    {listCharacter.map(({ id, name, status, species, image }) => {
      return (
        <Card key={id} name={name} status={status} species={species} image={image} />
      )
    })}
  </List>
)

export default ListCard