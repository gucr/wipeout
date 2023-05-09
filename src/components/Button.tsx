import styled from 'styled-components'

interface Props {

}

const Button = ({...props}:Props) => {

  return <Wrapper {...props}/>
}

export default Button

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
`