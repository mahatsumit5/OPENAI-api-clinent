import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const HamBurger = ({ prevChats }) => {
  // console.log(prevChats);

  return (
    <div>
      <Navbar className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-sm-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-sm-sm`}
            aria-labelledby={`offcanvasNavbarLabel-sm-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-sm-sm`}>
                Questions{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* {prevChats.map((chat, index) => (
                  <Nav.Link href="#action1" key={index}>
                    {chat.Query}
                  </Nav.Link>
                ))} */}
              </Nav>

              <Button variant="outline-success">Reset</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
