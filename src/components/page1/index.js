import React from 'react'
import {Link} from 'react-router-dom'

const Page1 = function (props) {
  return (
    <div className="flex-container">
      <h1 className="styled-header">Styled Components Interactive Example</h1>
      <Link to={'/page2'}>
        <div className="styled-button">Go To Page 2</div>
      </Link>
    </div>
  )
}
export default Page1
