import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

export default function Nav(){
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <img src="/tsa_logo.png" alt="Teman Startup Logo" height="50"/>
                    <span style={{fontFamily: "Montserrat, sans-serif", fontStyle: "bold"}}>Teman Startup Academy</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}