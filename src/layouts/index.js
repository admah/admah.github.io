import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header'
import './index.css'

const PageWrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 40px 2.2rem 1.45rem;
`

const Layout = ({ children, data }) => (
  <PageWrapper>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <ContentWrapper>{children()}</ContentWrapper>
  </PageWrapper>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
