import { Container, Navbar, Nav } from "react-bootstrap"
import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom"
import { NavbarLink } from "../data/index.js";

const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if(window.scrollY > 10) {
            setChangeColor(true);
        }else {
            setChangeColor(false);
        }
    }

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);
    });

    return (
        <div>
            <Navbar expand="lg" className={changeColor ? "class-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className="fs-3 fw-bold">
                        WarkopZero
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mx-auto text-center">
                    {NavbarLink.map((data) => {
                        return(
                        <div key={data.id} className="nav-link">
                            <NavLink to={data.path} className=
                            {({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                            } end>{data.text}
                            </NavLink>
                        </div>
                        )
                    })}
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default NavbarComponent