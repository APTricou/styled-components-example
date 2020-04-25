import styled from 'styled-components'

const CoolBackground = styled.div`
  width: 50%;
  height: 90vh;
  margin-top: 5vh;
  margin-left: 5vw;
  background: transparent;
  display: ${(props) => (props.right ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  opacity: ${(props) => (props.right ? 1 : 0)};
  transition: 1s all ease;

  h1 {
    text-transform: uppercase;
    color: black;
  }
`

export default CoolBackground
