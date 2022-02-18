import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    font-size: 2rem;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px){
        position: absolute;
        top: 10px;
        left: 25px
    }
`;

export const NavIcon = styled.div`
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    p{
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`
    transform: translate(-50%, -15%);
    font-size: 2rem;

`;
