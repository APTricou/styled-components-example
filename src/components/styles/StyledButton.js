import styled from 'styled-components'

const StyledButton = styled.div`
  border: 0.25rem mediumpurple solid;
  border-radius: 1rem;
  text-align: center;
  line-height: 5rem;
  font-weight: bolder;
  text-transform: uppercase;
  height: 5rem;
  margin-top: 0.5rem;
  width: 10rem;
  font-size: 1.2rem;
  color: mediumpurple;
  background-color: whitesmoke;
  transition: all 0.5s ease;

  :hover {
    height: 5.5rem;
    width: 11rem;
    margin: 0;
    width: 12rem;
    line-height: 5.5rem;
    background-color: mediumpurple;
    color: whitesmoke;
  }
`

export default StyledButton
