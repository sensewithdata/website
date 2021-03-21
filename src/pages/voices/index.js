import React from "react"
import Container from "../../components/container"
import ContentBlock from "../../components/contentblock"

export default function About() {
  return (
    <Container>
      <ContentBlock>
        <h2>Data Voices</h2>
        <p>We like asking questions, provoking discourse and exploring a diversity of attitudes and approaches,
  as a method of research and developing our data practice. So we've approached people to add their data insights and ask a question to continue the discussion.</p>
      </ContentBlock>
      <ContentBlock>
        <h3>Kate Swade</h3>
        <p>Introducing Digital Commons, a platform cooperative with a mission to use GIS, mapping, and linked data to support the growth of the solidarity economy and the commons. <a href="./kateswade">> read more</a></p>
      </ContentBlock>
    </Container>
  )
}
