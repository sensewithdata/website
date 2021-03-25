import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const HeaderOutsideContainer = styled.header`
  width: 100%;  
  z-index: 1;
  background-color: white;
  top: 0px;
  padding: 0rem 1rem 0 1rem;
`

const HeaderInsideContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 200px;
  position: center;
  min-height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const HeaderMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 10px;
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  display: block;
  color: black;
  box-shadow: none;
  padding: 15px 0 15px 0;
  font-size: 25px;
  font-family: 'Alegreya Sans',sans-serif;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    box-shadow: none;
  } 
`

const FixedImage = styled.img`
  margin: 1rem auto 1rem 1rem;
  align-self: center;
  min-width: 373px;
  max-width: 373px;
`
const HeaderLi = styled.li`
  padding: 0 10px 0 10px;
`

const Header = props => (
      <HeaderOutsideContainer>
        <HeaderInsideContainer>
          <HeaderLink href="/"><FixedImage src="/logo2cropped.png"></FixedImage></HeaderLink>
          <HeaderMenu>
            <HeaderLi><HeaderLink href="/questions/">questions</HeaderLink></HeaderLi>
            <HeaderLi><HeaderLink href="/voices/">voices</HeaderLink></HeaderLi>
            <HeaderLi><HeaderLink href="/resources/">resources</HeaderLink></HeaderLi>
            <HeaderLi><HeaderLink href="/about/">about</HeaderLink></HeaderLi>

          </HeaderMenu>
        </HeaderInsideContainer>
      </HeaderOutsideContainer>
    )

export default function Container({ children }) {

    return <div>
      <Header />
    {children}
</div>
}