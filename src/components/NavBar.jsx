import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown,} from "react-bootstrap";
import Brand from "../img/svg/logo-no-background.svg";
import "../components/NavBar.css";
import SearchContext from "./SearchContext";

export const NavBar = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResults(data.drinks || []);
      setSearchTerm(""); // Clear the search bar after search
    } catch (error) {
      console.error("Error searching for cocktails:", error);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
        <Container fluid>
          <Link to="/" className="brand-logo">
            <img
              src={Brand}
              alt="Logo"
              className="d-inline-block align-top logo-image"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>              
              <NavDropdown title="Filter" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/alcoholic">Alcoholic</NavDropdown.Item>
                <NavDropdown.Item href="/nonAlcoholic">Non Alcoholic</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/ordinaryDrink">Ordinary Drink</NavDropdown.Item>
                <NavDropdown.Item href="/cocktail">Cocktail</NavDropdown.Item>                
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cocktailGlass">Cocktail glass</NavDropdown.Item>
                <NavDropdown.Item href="/champagneFlute">Champagne flute</NavDropdown.Item>
              </NavDropdown>              
              <Nav.Link href="/suscribe" >Suscribe</Nav.Link>
              <Nav.Link href="/members" >Members</Nav.Link>
              <NavDropdown title="Create your list" id="navbarScrollingDropdown">                
                <NavDropdown.Item href="/create">Create</NavDropdown.Item>
                <NavDropdown.Item href="/edit/:id">Edit</NavDropdown.Item>
                <NavDropdown.Item href="/show">Show</NavDropdown.Item>                
              </NavDropdown>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <Form.Control
                type="search"
                placeholder=""
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


