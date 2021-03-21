import React from "react"
import { graphql } from "gatsby"

import Container from "../components/container"
import ContentBlock from "../components/contentblock"

// data injected by below query
export default function Home({ data }) {
  return (
  <Container>
    <ContentBlock>
    <p>What is a burning question? One that needs to be answered! Taking a prompt from Rebecca Solnit's <a href="https://lithub.com/to-break-the-story-you-must-break-the-status-quo/">"To Break the Story, You Must Break the Status Quo"</a>, we set out to hold a virtual panel discussion that thinks about and beyond the data status quo. What are the dominant narratives? Where are the gaps existing data practice? What's worrying and what's hopeful?</p>
    <p>Currently we've discussed two burning questions:</p>
    <p><b>Question 1: </b><a href="#1">What does a bright / dark data future look like?</a></p>
    <p><b>Question 2: </b><a href="#2">How can system mapping data become a springboard for collective action?</a></p>
    </ContentBlock>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <ContentBlock>
      <div id={node.frontmatter.index} dangerouslySetInnerHTML={{__html: node.html }} />
      </ContentBlock>
    ))}
  </Container>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {filter: {eq: "question"}}}) {
    edges {
      node {
        html,
        frontmatter {
          index
        }
      }
    }
  }
}
`