import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const Layout = props => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            <title>Conference Management Vinnitsya</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Header />
        {props.children}
        <Footer />
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

export default Layout;
