import React from "react"
import Container from "../../components/container"
import ContentBlock from "../../components/contentblock"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Link } from "gatsby"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        console.log(node)
        return (
            <img src={node.data.target.fixed.src} />
        )
      },
    },
  }

export default function About({ data }) {
  return (
    <Container>
      <ContentBlock>
        <h2>Data Voices</h2>
        <p>We like asking questions, provoking discourse and exploring a diversity of attitudes and approaches,
  as a method of research and developing our data practice. So we've approached people to add their data insights and ask a question to continue the discussion.</p>
      </ContentBlock>

      {data.allContentfulVoice.edges.map(({ node }) => (
        <ContentBlock>
          <h3>{node.title}</h3>
          {renderRichText(node.shortIntro, options)}
          <Link to={'/voices/' + node.slug}>> read more</Link>
        </ContentBlock>
      ))}
    </Container>

    
  )
}



export const pageQuery = graphql`
{
  allContentfulVoice(filter: {visible: {eq: true}}) {
    edges {
      node {
        id
        title
        visible
        shortIntro {
          raw
        }
        slug
      }
    }
  }
}
`