import { Container } from "./styles"



const Div = ({name, house, image}) => <Container> 
<img src={image} alt={name} />
<h3>{name}</h3>
<h5>{house}</h5>

</Container>

export default Div