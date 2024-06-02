import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchIcon = (props) => {
    return (
        <Nav>
            <NavMenu>
            <Link to={"/search"}>
              <img src="/images/search-icon.svg" alt="SEARCH"/>
              <span>SEARCH</span>
            </Link>
            
            </NavMenu>
        </Nav>
    )
}