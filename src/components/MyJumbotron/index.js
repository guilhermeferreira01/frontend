import { Jumbotron } from  'react-bootstrap';
import { Button } from 'react-bootstrap';

const MyJumbotron = () => {
    return (
        <Jumbotron>
            <h1>Projeto de DevWeb2</h1>

            <p>Projeto C3</p>
            
            <p>
                <Button variant="primary">Saiba mais!</Button> 
            </p>
        </Jumbotron>
    )
}

export default MyJumbotron;