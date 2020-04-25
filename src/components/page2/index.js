import React from 'react'

const Page2 = function (props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundImage:
          'radial-gradient( circle 426px at 75% 40%,  rgba(255,180,131,1) 0%, rgba(255,150,80,1) 90% )',
      }}
    >
      <div
        style={{
          textAlign: 'center',

          position: 'absolute',
          left: '60%',
          top: '25%',
          border: '0.2rem solid orangered',
          borderRadius: '1rem',
          padding: '0rem 1rem',
          backgroundColor: 'orange',
        }}
      >
        <h1>Welcome to Page 2</h1>
        <h3>Let's make a Cool Animation</h3>
      </div>
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
    </div>
  )
}
export default Page2
