import React from 'react'
import SinglePage from "./SinglePage"
import { Link, useRouteMatch, Route } from "react-router-dom"


const About = () => {
  const { url, path } = useRouteMatch()
  return (
  <div className="about__content">
  <ul className="about__list">
    <li>
      <Link to={'${url}/about-app'}>About App</Link>
    </li>
    <li>
      <Link to={'${url}/about-author'}>About Author</Link>
    </li>
  </ul>
  <Route path={'${path}/:slug'}>
    <SinglePage />
  </Route>
</div>
)
}

export default About