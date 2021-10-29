import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

export default function Footer(){
    return(
        <Navbar fixed="bottom" style={{backgroundColor: "#064577"}}>
            <Container style={{textAlign: "center", color: "white", paddingTop: "3%", fontSize: "0.8em"}}>
                <p>© 2020 Teman Startup - Your business resources & news.</p>
            </Container>
        </Navbar>
    )
}