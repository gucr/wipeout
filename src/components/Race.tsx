import styled from 'styled-components'
import WeaponIndicator from "./Race/WeaponIndicator.tsx";
import EnergyThrust from "./Race/EnergyThrust.tsx";
import {fontSet} from "../theme.ts";
import CheckTimer from "./Race/CheckTimer.tsx";
import PositionLap from "./Race/PositionLap.tsx";

interface Props {

}

const Race = ({...props}: Props) => {

  return <Wrapper {...props}>
    <CheckTimer/>
    <WeaponIndicator/>
    <PositionLap/>
    <div>
      <EnergyThrust/>
    </div>
  </Wrapper>
}

export default Race

const Wrapper = styled.div`
  
`
