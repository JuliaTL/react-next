import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import { StyledHeader } from './HeaderStyled.styled';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../global';
import { theme } from './theme';

const Header = () => (
    <ThemeProvider theme= {theme} >
        <StyledHeader>
            <GlobalStyles />
            <Burger />
                <Menu/>
                <div>
                    <p>EVENT MANAGEMENT PLATFORM</p>
                </div>
        </StyledHeader>
    </ThemeProvider>
    );

export default Header;
