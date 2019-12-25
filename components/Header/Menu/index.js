import React from 'react';
import { StyledMenu } from './MenuStyled.styled';
import Link from 'next/link';

const Menu = () => {
    return (
        <StyledMenu>
            <a href="/">
            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            Profile
            </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                Dashboard
            </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                My events
            </a>
            <a href="/">
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                Favorite events
            </a>
            <a href="/">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                Settings
            </a>
            <a href="/">
                <span role="img" aria-label="contact">&#x1f4e9;</span>
                Sign out
            </a>
        </StyledMenu>
    )
}
export default Menu;
