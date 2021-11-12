import Button from "../../components/ButtonRoll"
import Students from "../../components/Students"
import '../../components/Students/styles.css'

function Wizards({array, wizards, setArray}) {

    function reRoll() {
        setArray([])
        wizards()
    }


    return (
        <div>
            <Students array={array} setArray={setArray} wizards={wizards}/>
            <Button onClick={() => reRoll()}  text={'Tentar novamente'}/>
        </div>
    )
}

export default Wizards