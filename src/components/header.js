import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  background: transparent;
  margin-bottom: 30px;
`

const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <h1>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </HeaderDiv>
)

export default Header
