import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import { StyledHeader } from './HeaderStyled.styled';
//import { ThemeProvider } from 'styled-components';
//import { GlobalStyles } from './global';
//import { theme } from './theme';

const Header = () => (
        <StyledHeader>
            <div>
            <Menu />
            <Burger />
            <p>EVENT MANAGEMENT PLATFORM</p>
            </div>
        </StyledHeader>
    )

export default Header;
