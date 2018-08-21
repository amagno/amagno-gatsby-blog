import React from 'react'
import Link from 'gatsby-link';
import GithubIcon from './GithubIcon'
import capitalize from 'lodash/capitalize'

const linkClasses = (path, locationPath) => {
  let active = path === locationPath ? 'active' : '';
  return `f7 athelas ttu black bg-animate 
    hover-bg-orange hover-white inline-flex 
    items-center pa2 ba border-box nav-link ${active}`;
}

export const Breadcrumbs = ({ path }) => (
  <div className="breadcrumbs w-100 flex justify-end ml2">
    <span>/</span>
    <span className="ml1">
      <Link to="/">
        Home
      </Link>
    </span>
    <span className="ml1">/</span>
    {path.split('/').map((p, i) => {
      if (p.length > 1) {
        return (
          <div>
            <span key={i} className="ml1">
              <Link to={`/${p}`}>
                {capitalize(p)}
              </Link>
            </span>
            <span className="ml1">/</span>
          </div>
        );
      }
    })}
  </div>
)

const Header = ({ path }) => (
  <nav className="mt3 bb b--black-10 flex flex-column flex-wrap items-center justify-center w-100">
    <h1
      className="f1-l f3 tc orange m0"
    >
      Alexandre M. Monteiro
  </h1>
    <div className="tc pb3 mt3 ml3-l flex flex-row">
      <Link className={linkClasses('/', path)} to="/">Posts</Link>
      <Link className={linkClasses('/about', path)} to="/about/">Sobre</Link>
      <Link className={linkClasses('/contact', path)} to="/contact/">Contato</Link>
      <a className="link near-black hover-orange db h2 w2 ml3" href="https://github.com/amagno" title="GitHub Alexandre Magno">
        <GithubIcon />
      </a>
    </div>
    <Breadcrumbs path={path} />
  </nav>
)

export default Header