import React, {useState} from 'react'
import {Page2Container, MessageBox} from '../styles'

const Page2 = function (props) {
  const [right, setRight] = useState(false)
  return (
    <Page2Container>
      <MessageBox right={right} onClick={() => setRight(true)}>
        <h1>Welcome to Page 2</h1>
        <h3>Let's make a Cool Animation</h3>
      </MessageBox>
      <div className="coolbackground">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Page2Container>
  )
}
export default Page2
