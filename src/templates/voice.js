import React from "react"
import Container from "../components/container"
import ContentBlock from "../components/contentblock"
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
  
const Voice = ({ data }) => {
    console.log(data.contentfulVoice.paragraph1)
    return (
        <Container>
            <ContentBlock>
                <h2>Data Voice - {data.contentfulVoice.title}</h2>
                {renderRichText(data.contentfulVoice.paragraph1, options)}
            </ContentBlock>
            <ContentBlock>
                {renderRichText(data.contentfulVoice.paragraph2, options)}
            </ContentBlock>
            <ContentBlock>
                {renderRichText(data.contentfulVoice.paragraph3, options)}
            </ContentBlock>
            {
                (
                    (data.contentfulVoice.paragraph4) ? (
            <ContentBlock>
                {renderRichText(data.contentfulVoice.paragraph4, options)}
            </ContentBlock>
                ) : (
                    null
                )
                )
            }
        </Container>
    )
    
  };

export default Voice;


export const pageQuery = graphql`
query($slug: String!) {
    contentfulVoice(slug: { eq: $slug }) {
        title
        slug
        paragraph1 {
            raw
            references {
                ...asset
            }
        }
        paragraph2 {
            raw
            references {
                ...asset
            }
        }
        paragraph3 {
            raw
            references {
                ...asset
            }
        }
        paragraph4 {
            raw
            references {
                ...asset
            }
        }

    }
}

fragment asset on ContentfulAsset {
    contentful_id
    __typename
    fixed(width: 300) {
        width
        height
        src
        srcSet
    }
}
`;