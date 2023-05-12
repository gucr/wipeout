import styled from 'styled-components'
import {colors, fontSet} from "../../theme.ts";

interface Props {

}

const EnergyThrust = ({...props}: Props) => {

  return <Wrapper viewBox="0 0 200 100" {...props}>
    <defs>
      <linearGradient id="thrust" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0" stopColor="#5202ab"/>
        <stop offset=".25" stopColor="#f307e6"/>
        <stop offset=".5" stopColor="#ff0000"/>
        <stop offset=".75" stopColor="#f1f211"/>
        <stop offset="1" stopColor="#fff"/>
      </linearGradient>

      <linearGradient id="energy" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0" stopColor="#f429bc"/>
        <stop offset=".3" stopColor="#7633cd"/>
        <stop offset=".7" stopColor="#8345dc"/>
      </linearGradient>
    </defs>


    <g fill="url(#thrust)">
      <SpeedoMeter id="speedoMeter" d="m 48 42 h 68 q 11 0 16 -10 l 6 -12 h 42 l -9 20 q -5 11 -25 11 h -102 z m 3 9 l 4 -9 m 3 9 l 4 -9 m 3 9 l 4 -9 m 4 9 l 4 -9 m 5 9 l 4 -9 m 6 9 l 4 -9 m 7 9 l 4 -9 m 8 9 l 4 -9 m 11 9 l 16 -31 m 0 31 l 16 -31"/>
    </g>

    <SpeedoMeter d="m 92 30 l 0 -11 h 38 q -4 11 -16 11 z"/>
    <use href="#speedoMeter" fill="url(#energy)" transform="scale(1 -1) translate(-15 -107)"/>

    <Speed x={17} y={40}>179</Speed>
    <Info x={95} y={28}>KPH</Info>
    <Info x={134} y={15}>Thrust</Info>
    <Info x={32} y={76}>Energy</Info>
  </Wrapper>
}

export default EnergyThrust

const Wrapper = styled.svg`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 120rem;
  
  text {
    fill: white;
  }
`
const Speed = styled.text`
  ${fontSet.amalgama};
  font-size: 27px;
`

const Info = styled.text`
  ${fontSet.info};
  font-size: 9px;
`

const SpeedoMeter = styled.path`
  stroke: ${colors.accent};
  stroke-width: 1.5;
  stroke-linejoin: round;
`