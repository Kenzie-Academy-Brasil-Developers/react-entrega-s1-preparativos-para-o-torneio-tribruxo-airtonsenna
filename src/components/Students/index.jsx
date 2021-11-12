import Div from "../StudentCard/index.jsx"
import './styles.css'

const Students = ({array}) => {

    
        return (
            <div className="students">

                {array.length > 0 && array.map(element => 

                    <div key={element.name}>
                        
                        <Div name={element.name} house={element.house} image={element.image} />
                    
                    </div>
                )}
            </div>

        )

    
}

export default Students 