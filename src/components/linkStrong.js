import * as React from "react"
import { Link } from "gatsby"

import { hoveranime } from "./layout.module.css"

const LinkStrong = ({ to, script, color, placing }) => {
  return (
    <Link
      to={to}
      itemProp="url"
      style={{
        display: `inline-flex`,
        justifyContent: placing,
        position: `relative,`,
        textDecorationColor: color,
      }}
      className={hoveranime}
    >
      <p
        style={{
          fontFamily: `Roboto Slab`,
          fontStyle: `normal`,
          fontWeight: 500,
          fontSize: `0.8rem`,
          textDecoration: `none`,
          color: color,
          margin: 0,
          lineHeight: `inherit`,
          display: `inline-block`,
        }}
      >
        {script}
      </p>
      <span alt="linkIcon" style={{ margin: 0, paddingLeft: `0.5rem` }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill={color}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
        </svg>
      </span>
    </Link>
  )
}

export default LinkStrong
