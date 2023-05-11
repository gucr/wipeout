import styled from 'styled-components'

interface Props {

}

const Button = ({...props}:Props) => {

  return <Wrapper {...props}/>
}

export default Button

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  cursor: pointer;
`