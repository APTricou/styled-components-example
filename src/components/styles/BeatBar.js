import styled from 'styled-components'

const BeatBar = styled.div`
  background-color: rgb(${(props) => (props.height * 255) / 100}, 100, 100);
  margin: 0.1rem;
  height: ${(props) => props.height}%;
  width: 3rem;
  transition: 0.3s all ease-in-out;
  opacity: ${(props) => 0.5 + props.height / 200};
  border-radius: 1rem;
`
export default BeatBar
