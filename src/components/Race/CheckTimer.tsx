import styled from 'styled-components'
import {colors, fontSet} from "../../theme.ts";

interface Props {

}

const CheckTimer = ({...props}:Props) => {

  return <Wrapper {...props}>
    <Check>Check</Check>
    <Clock>0:40<small>.3</small></Clock>
  </Wrapper>
}

export default CheckTimer

const Wrapper = styled.div`
  ${fontSet.amalgama};
  position: fixed;
  top: 8rem;
  left: 16rem;
`

const Check = styled.div`
  font-size: 8rem;
  color: ${colors.accent};
`

const Clock = styled.div`
  font-size: 14rem;
  small {
    font-size: 7rem;
  }
`