import Menu from "./Menu.tsx";
import KeyHint from "../KeyHint.tsx";
import styled from "styled-components";
import {fontSet} from "../../theme.ts";
import {useState} from "react";
import NavMenu from "../NavMenu.tsx";


const MenuRaceType = ({...props}) => {

  const raceTypes = ['arcade', 'time trial']

  const [selectedRaceType, setSelectedRaceType] = useState(raceTypes[0])

  const footerLine1 = <>
    <Description>
      <div>[ one player ]  single race against a full grid of competitors.</div>
    </Description>
  </>

  const footerLine2 = <Inputs>
    <KeyHint input="X" label="select"/>
    <KeyHint input="X" label="back" href="mainMenu"/>
  </Inputs>


  return <Menu
    header={<h1>Race type</h1>}
    pageTitle="Structure mode"
    footerLine1={footerLine1}
    footerLine2={footerLine2}
    {...props}
  >
    <NavMenu options={raceTypes.map(name => ({name, callback: setSelectedRaceType}))}/>

    <div style={{flex:2}}>
      {selectedRaceType}
    </div>
  </Menu>
}

export default MenuRaceType


const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`

const Description = styled.div`
  ${fontSet.info};
  display: flex;
  align-items: center;
  padding: 0 6rem;
`
