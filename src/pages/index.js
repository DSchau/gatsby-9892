import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

class IndexPage extends React.Component {
  static LINKS = [
    'pageTwoLink',
    'pageThreeLink'
  ]

  componentDidMount() {
    IndexPage.LINKS
      .forEach(link => {
        this[link].addEventListener('click', this.handleClick)
      })
  }

  componentWillUnmount() {
    IndexPage.LINKS
      .forEach(link => {
        this[link].removeEventListener('click', this.handleClick)
      })
  }
  
  handleClick = ev => {
    ev.preventDefault()
  }

  render() {
    return (
      <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/" ref={node => this.pageTwoLink = node}>Go to page 2</Link>
    <Link to="/page-3/" innerRef={node => this.pageThreeLink = node}>Go to page 3</Link>
  </Layout>
    )
  }
}

export default IndexPage
