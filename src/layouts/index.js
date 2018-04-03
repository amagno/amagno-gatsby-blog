import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
// import { rhythm, scale } from '../utils/typography'
import 'tachyons';
import './index.css';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Helmet from 'react-helmet'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <Container className="ph2">
        <Header path={location.pathname} />
        {children()}
        {rootPath === location.pathname ? '' : (
          <Link to="/" className="db mt3 mb3 f6 ttu">
            ← Home
            </Link>
        )}
        <Footer />
      </Container>
    )
  }
}

export default Template
