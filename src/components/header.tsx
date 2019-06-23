import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from "./header.module.scss"

const Header = ({ siteTitle = '' }) => (
  <header className={style.header}>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <Link to="/script/">Script</Link>
      <Link to="/production-history/">Production History</Link>
    </div>
  </header>
)

export default Header
