const path = require('path');

  module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    const projectTemplate = path.resolve('./src/templates/project-preview.js');
    const res = await graphql(`
        query {
            allContentfulProjectListing {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
        res.data.allContentfulProjectListing.edges.forEach((edge) => {
            createPage({
                component: projectTemplate,
                path: `/project-preview/${edge.node.slug}`,
                context: {
                    slug: edge.node.slug
                }
            });
        });
  };

  