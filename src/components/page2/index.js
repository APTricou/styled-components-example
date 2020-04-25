import React, {useState, useEffect} from 'react'
import {Page2Container, MessageBox, CoolBackground, BeatBar} from '../styles'

const Page2 = function (props) {
  const [right, setRight] = useState(false)
  function randomHeight() {
    return Math.ceil(Math.random() * 100)
  }
  const [heights, setHeights] = useState(new Array(15).fill(0))

  useEffect(() => {
    setInterval(() => setHeights(heights.map((x) => randomHeight())), 300)
  }, [])

  return (
    <Page2Container>
      <MessageBox right={right} onClick={() => setRight(true)}>
        <h1>Welcome to Page 2</h1>
        <h3>Let's make a Cool Animation</h3>
      </MessageBox>
      <CoolBackground right={right}>
        {heights.map((height, index) => (
          <BeatBar key={index} height={height} />
        ))}
      </CoolBackground>
    </Page2Container>
  )
}
export default Page2
