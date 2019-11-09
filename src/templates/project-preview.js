import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulProjectListing(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const ProjectPreview = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url}/>
      }
    }
  }

    return(
        <Layout>
        <Head title={props.data.contentfulProjectListing.title}/>
           <h1>{props.data.contentfulProjectListing.title}</h1>
           <p>{props.data.contentfulProjectListing.publishedDate}</p>
           {documentToReactComponents(props.data.contentfulProjectListing.body.json, options)}
        </Layout>
    );
}
export default ProjectPreview;