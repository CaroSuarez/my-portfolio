import React, {Fragment} from 'react';
import { NavLink as NavLinks } from 'react-router-dom';
import styled from 'styled-components'



const Nav = styled.nav`
    background-color : #093579;
    height : 50px;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    z-index : 10;
`

const NavLink = styled(NavLinks)`    
    font-family: Red Hat Display;
    font-style: normal;
    font-weight: normal; 
    color : #FFFFFF;
    text-decoration : none;
    display : flex;
    align-items : center;
`



const Header = (props) => {

    return (
        <Nav>            
            <NavLink to = '/'><img src={props.logo} alt="Logo" height = '50px' width = '40px'/></NavLink>
            <NavLink to = '/aboutMe'>About Me</NavLink>
            <NavLink to = '/projects'>Projects</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
        
        </Nav>   
    )
}

export default Header;
