import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'

function Home({wizards}) {

    const start = () => {
        wizards()
        history.push('/wizards')
    }

    const history = useHistory()

    

    return (
        <div className='App-header'>
            <h1> Torneio Tribruxo </h1>

            <p>Clique no botão para encontrar os feiticeiros</p>

            <Button onClick={() => start()} text={'Começar!'}></Button>
        </div>
    )
}

export default Home