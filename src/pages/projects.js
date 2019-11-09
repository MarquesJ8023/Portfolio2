import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';

import Layout from '../components/layout';
import projectStyles from './projects.module.scss';
const ProjectPage = () => {

    const data = useStaticQuery(graphql`
        query{
           allContentfulProjectListing ( sort: {fields: publishedDate, order: DESC})
    
               {
               
               edges {
                   
                   node {
                       title
                       slug
                       publishedDate(formatString: "MMMM Do, YYYY")
                   }
               }
           }
        }
    `)

    return(
        <Layout>
        <Head title="Projects" />
            <h1>Projects</h1>
            <ol className={projectStyles.listings}>
            {data.allContentfulProjectListing.edges.map((edge) => {
                return(
                    <li className={projectStyles.listing}>
                        <Link to={`/project-preview/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                        
                    </li>
                )
            })}         
            </ol>
        </Layout>
    );
}

export default ProjectPage;