import styled from 'styled-components'

const MessageBox = styled.div({
  textAlign: 'center',

  position: 'absolute',
  right: ({right}) => {
    return right ? '5%' : '40%'
  },
  top: '25%',
  border: '0.2rem solid orangered',
  borderRadius: '1rem',
  padding: '0rem 1rem',
  backgroundColor: 'orange',
  transition: '1s all ease-out',
})

export default MessageBox
