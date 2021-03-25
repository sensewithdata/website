import React from "react"
import Container from "../components/container"
import ContentBlock from "../components/contentblock"

export default function About() {
  return (
    <Container>
      <ContentBlock>
      <p>Created by Natasha Nicholson, Pete Quinn Davis, Annie Legge, and Alex Hilson. As part of our work as Data Fellows in the <a href="https://www.swctn.org.uk/data/">South West Creative Technology Network</a></p>

      <div>
        <div>
          <div><p><b>Annie Legge</b></p></div>
        </div>
        <div>
          <p>Annie is co-founder of DOT PROJECT and DOT INSIGHT, with a background across art, technology and the social sector. Annie brings deep passion and drive to impact social development initiatives through the sustainable use of technology, and has explored effective and inclusive community sense-making through system mapping.</p>
        </div>
      </div>

      <div>
        <div>
          <div><p><b>Natasha Nicholson</b></p></div>
        </div>
        <div>
          <p>Natasha is a partner in charlick+nicholson architects. Her research is focussed on data, democracy and place, including the spatial, material and structural aspects of data and data systems in placemaking. She is interested in how data can turbocharge collective decision-making and change. Natasha has researched signal-blocking technologies in architecture, and asks can a critical approach to the presence and absence of data form new approaches to civic engagement, democracy, and new types of space?"</p>
        </div>
      </div>

      <div>
        <div>
          <div><p><b>Pete Quinn Davis</b></p></div>
        </div>
        <div>
          <p>Pete has been focusing on how we can use scanned data to physically manifest, manage, direct and utilize the unique potentialities of scanning technology. By using data in this form, we have the opportunity to rethink and see new links between designed objects, visualised spaces, cultural meanings and ourselves.</p>
        </div>
      </div>

      <div>
        <div>
          <div><p><b>Alex Hilson</b></p></div>
        </div>
        <div>
          <p>Alex is a software developer, and has been exploring how data helps (and hinders) people to take control of the environment they live in.</p>
        </div>
      </div>
      </ContentBlock>
    </Container>
  )
}
