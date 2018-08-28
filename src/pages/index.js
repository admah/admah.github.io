import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import twitter from '../img/twitter.svg'
import github from '../img/github.svg'

const IndexWrapper = styled.div`
  p {
    color: #181a1b;
    font-size: 15px;
    font-weight: 300;
    margin: 0;
  }
`

const IntroH1 = styled.h1`
  color: #181a1b;
  font-family: 'Rock Salt', cursive;
  font-size: 46px;
  line-height: 68px;
  letter-spacing: 0.05em;
  text-align: left;
  width: 80%;
`

const SubIntroH2 = styled.h2`
  color: #181a1b;
  font-weight: 300;
`

const IndexContent = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(320, 1fr));

  @media (min-width: 720px) {
    grid-template-columns: minmax(320px, 600px) minmax(280px, 320px);
  }
`

const TextContent = styled.div`
  p {
    margin: 1.2rem 0;
  }
`

const ResumeContent = styled.div`
  margin-top: 1.2rem;

  span {
    color: #e85a4f;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 0;

    @media (min-width: 720px) {
      margin-left: 1.45rem;
    }
  }

  ul {
    list-style: none;
    margin-left: 0;

    @media (min-width: 720px) {
      margin-left: 1.45rem;
    }
  }

  li {
    margin: 1.2rem 0;
  }

  .date {
    color: #8e8d8a;
  }

  .position {
    font-size: 16px;
    font-weight: 600;
    margin: 4px 0;
  }
`

const SocialIcons = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-top: 20px;

  li {
    display: inline-block;
    margin: 0 5px 0 0;
  }

  img {
    width: 48px;
  }
`

const IndexPage = () => (
  <IndexWrapper>
    <IntroH1>Hello, my name is Adam Murray.</IntroH1>
    <SubIntroH2>I currently work as a front-end software engineer.</SubIntroH2>

    <IndexContent>
      <TextContent>
        <p>
          I'm passionate about products and developing things that enhance
          people's everyday lives. I'm a life-long learner, and someone that
          loves to dive into new things.
        </p>
        <p>
          During my career, I've worked in a variety of roles including:
          development, product management, and business management. I believe
          this has given me a larger perspective to see how the pieces all fit
          together and move towards a common goal. In addition to that variety
          of experience, I hold a bachelor's degree in anthropology and a
          master's degree in business management.
        </p>
        <p>
          Currently, I'm working as a front-end engineer using technologies
          like: React, Redux, CSS, and HTML. In the past, I focused in
          open-source content management using technologies such as: PHP,
          Wordpress, Drupal, Magento, and others.
        </p>
        <SocialIcons>
          <li>
            <a href="https://twitter.com/admah">
              <img src={twitter} alt="find me on twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/admah">
              <img src={github} alt="find me on github" />
            </a>
          </li>
        </SocialIcons>
      </TextContent>
      <ResumeContent>
        <span>Recent Timeline</span>
        <ul>
          <li>
            <p className="date">November 2017 - present</p>
            <p className="position">Senior Front-end Engineer</p>
            <p className="company">LifeWay</p>
          </li>
          <li>
            <p className="date">February 2015 - November 2017</p>
            <p className="position">Senior Web Developer</p>
            <p className="company">World Vision</p>
          </li>
          <li>
            <p className="date">December 2012 - February 2015</p>
            <p className="position">
              Senior Drupal Engineer, Web Development Manager, Product Manager
            </p>
            <p className="company">MasterChannel</p>
          </li>
        </ul>
      </ResumeContent>
    </IndexContent>
  </IndexWrapper>
)

export default IndexPage
