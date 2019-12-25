import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = props => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            <title>Event Management Platform</title>
        </Head>
            <Header />
            {props.children}
    </React.Fragment>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.array.isRequired,
    ]),
};

Layout.defaultProps = {
    children: [],
};

//export default Layout;
