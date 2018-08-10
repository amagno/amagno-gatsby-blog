import React from 'react'

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
        <p className="gray mt4">
          Written by <strong>Alexandre Magno Monteiro</strong>{' '}
          {/* <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a> */}
        </p>
      </div>
    )
  }
}

export default Bio
