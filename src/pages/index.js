import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexWrapper = styled.div``

const IntroH1 = styled.h1`
  text-align: left;
  font-family: 'Domine', serif;
  font-size: 72px;
  width: 60%;
`

const IndexPage = () => (
  <IndexWrapper>
    <IntroH1>hello, my name is adam.</IntroH1>
  </IndexWrapper>
)

export default IndexPage
