import React from "react"
import Container from "../../components/container"
import ContentBlock from "../../components/contentblock"

export default function About() {
  return (
    <Container>
      <ContentBlock>
          <h2>Kate Swade</h2>
          <p><em>Organisation:</em> Digital Commons - a collaboration between <a href="https://sharedassets.org.uk/">Shared Assets</a> and the <a href="https://www.solidarityeconomy.coop/">Solidarity Economy Association</a></p>
      </ContentBlock>
      <ContentBlock>
        <h3>Data and me:</h3>
        <p>We have been grappling with the issue of data at Shared Assets since we <a href="https://sharedassets.org.uk/policy/exploring-land-data/">realised</a> that the lack of access to good information on land was a real blocker to seeing effective common good land use. There is lots of data on land out there but it (even the open government data) is often hard to understand for non-experts and most services making it easier to understand have a high price tag. We developed <a href="http://www.landexplorer.cc/">www.landexplorer.cc</a> as a response to this but it has been really hard to find funding and a sustainable business model for a platform like this, especially because we want to keep it “in the commons” and not raise private equity finance.</p>
        <p> We were really excited, then, to form a collaboration with the Solidarity Economy Association whose <a href="https://mersey-green.solidarityeconomy.coop">SEA-map software</a> helps local organisations map the solidarity economy in their areas. We both believe that data is a common good and should be easily accessible.</p>
      </ContentBlock>
      <ContentBlock>
          <h3>Introducing Digital Commons</h3>
          <p>Digital Commons is a new platform cooperative, a community benefit society. Our mission is to use GIS, mapping, linked data and other tools to support the growth of the solidarity economy and the commons.</p>
          <p>We want to see a world where data is recognised as a common good; and where the broad solidarity economy is empowered and enabled to collect, use and share data in ways that contribute to the commons.</p>
          <p>We will use linked data methodologies to deepen the knowledge and resources available on the solidarity economy and help groups, researchers and membership organisations reduce the “surveying burden” on small organisations.</p>
          <p>We will use linked data methodologies to deepen the knowledge and resources available on the solidarity economy and help groups, researchers and membership organisations reduce the “surveying burden” on small organisations.</p>
          <p>We will be launching soon; watch out for our new website at <a href="http://www.digitalcommons.coop">http://www.digitalcommons.coop</a></p>
      </ContentBlock>
      <ContentBlock>
          <h3>Burning question</h3>
          <p>How do we communicate the value of data - particularly linked data - to non experts without getting overly technical?</p>
      </ContentBlock>
    </Container>
  )
}
