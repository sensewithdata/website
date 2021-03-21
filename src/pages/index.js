import React from "react"
import styled from 'styled-components'

import Container from "../components/container"
import ContentBlock from "../components/contentblock"


export default function Home() {
  return (
  <Container>
    <ContentBlock>
    <p>sensewithDATA brings together a collective of sensemakers, seeking to start a discussion about how digital data affects communities and becomes a force for change. How human data enables the creation and delivery of highly personal experiences, and where organisational data can enable rapid and potentially life-changing decisions. We intend this work to have an awareness and understanding of the human and social values that must underpin the development of new technologies that capture and analyse data. We like asking questions, provking discourse and exploring a diversity of attitudes and approaches, as a method of research and developing our data practice.</p>

    <p>There are two key parts to this work. In <a href="/questions/">'questions'</a>, we host a virtual panel discussion about the burning questions facing data sensemakers. And in <a href="/resources/">'resources'</a>, we've put together a set of links to interesting articles, exhibitions, and papers.</p>
    </ContentBlock>
  </Container>
  )
}
