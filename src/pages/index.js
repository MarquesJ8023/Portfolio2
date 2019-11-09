import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const HomePage = () => {
    return(
        <Layout>
        <Head title="Home" />
            <h1>Marques Johnson</h1>
            <h2>Projects That Matter</h2>
            <p>
                I am a Software Developer Knowledable in various stacks and technologies
            </p>
            <p>Reach out. <Link to="/contact">Contact me.</Link></p>
        </Layout>
    );
}

export default HomePage;