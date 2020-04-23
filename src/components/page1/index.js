import React from 'react'
import {Link} from 'react-router-dom'

import {StyledButton, FlexContainer, StyledHeader} from '../styles'

const Page1 = function (props) {
  return (
    <FlexContainer>
      <StyledHeader>Styled Components Interactive Example</StyledHeader>
      <Link to={'/page2'}>
        <StyledButton>Go To Page 2</StyledButton>
      </Link>
    </FlexContainer>
  )
}
export default Page1
