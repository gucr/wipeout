import styled from 'styled-components'
import {colors} from "../../theme.ts";

interface Props {

}

const PositionLap = ({...props}:Props) => {

  return <Wrapper {...props}>
    <div>Pos</div>
    <div>
      <Count>12</Count>
      of
      <Count>12</Count>
    </div>
    <div>Lap</div>
    <div>
      <Count>1</Count>
      of
      <Count>2</Count>
    </div>
  </Wrapper>
}

export default PositionLap

const Wrapper = styled.div`
  font-size: 7rem;
  color: ${colors.accent};
  position: fixed;
  top: 8rem;
  right: 8rem;
  text-align: center;
`

const Count = styled.span`
  font-size: 16rem;
  color:#fff;
`