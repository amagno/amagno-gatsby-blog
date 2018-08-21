import React from 'react'
import Link from 'gatsby-link';
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div className="mt3 flex flex-row items-center">
        <img
          src={profilePic}
          alt={`Alexandre Magno Monteiro`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 50
          }}
        />
        <Link to="/about" className="gray mt2">
        Written by <strong>Alexandre Magno Monteiro</strong>{' '}
          {/* <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a> */}
        </Link>
      </div>
    )
  }
}

export default Bio
