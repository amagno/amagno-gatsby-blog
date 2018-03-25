import React from 'react'
import Link from 'gatsby-link';
import GithubIcon from './GithubIcon'

const linkClasses = 'f7 athelas ttu black bg-animate hover-bg-orange hover-white inline-flex items-center pa2 ba border-box'

const Header = () => (
  <nav className="mt3 bb b--black-10 flex flex-column flex-wrap items-center justify-center w-100">
    <h1
      className="f1-l f3 tc orange m0"
    >
      Alexandre M. Monteiro
  </h1>
    <div className="tc pb3 mt3 ml3-l flex flex-row">
      <Link className={linkClasses} to="/">Posts</Link>
      <Link className={linkClasses} to="/about">Sobre</Link>
      <Link className={linkClasses} to="/contact">Contato</Link>
      <a className="link near-black hover-orange db h2 w2 ml3" href="https://github.com/mrmrs" title="GitHub">
        <GithubIcon />
      </a>
    </div>
  </nav>
)

export default Header