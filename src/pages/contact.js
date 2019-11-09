import React from 'react';
import Head from '../components/head';

import Layout from '../components/layout';

const ContactPage = () => {

    return(
        <Layout>
        <Head title="Contact" />
            <h1>Contact Me</h1>
                
                    <a href="https://www.linkedin.com/in/marques-johnson" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.twitter.com/marques_l_j" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.github.com/marquesj8023" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.marques.johnson@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
               
        </Layout>
    );
}

export default ContactPage;