import React from 'react';
import Head from '../components/head';


import Layout from '../components/layout';

const SkillsPage = () => {

    return(
        <Layout>
        <Head title="Skills" />
            <h1>Technical Skills</h1>

            <p>CSS, HTML, JavaScript, Python, React, Django, Node.js,</p>

            <p>GitHub, MySQL, Linux, OOP, Unit Testing, Babel,</p>

            <p>React Native, Auth0, Express.js, Sqlite3, MongoDB</p>
        </Layout>
    );
}

export default SkillsPage;