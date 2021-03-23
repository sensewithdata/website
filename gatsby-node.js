const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
    {
        allContentfulVoice(filter: {visible: {eq: true}}) {
          edges {
            node {
              id
              visible
              shortIntro {
                raw
              }
              slug
            }
          }
        }
      }
      
    `).then(result => {
        if (result.errors) {
          console.log("Error retrieving contentful data (graphql)", result.errors);
        }
        const voiceTemplate = path.resolve("./src/templates/voice.js");
        result.data.allContentfulVoice.edges.forEach(edge => {
            console.log("Creating page /voices/", edge.node.slug)
            createPage({
            path: `/voices/${edge.node.slug}/`,
            component: slash(voiceTemplate),
            context: {
            slug: edge.node.slug,
                id: edge.node.id
            }
            });
          });
        })
        .catch(error => {
            console.log("Error retrieving contentful data (createpage)", error);
          });
      };
      

