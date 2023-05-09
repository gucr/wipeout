import Menu from "./Menu.tsx";
import KeyHint from "../KeyHint.tsx";
import styled from "styled-components";
import {fontSet} from "../../theme.ts";
import {useState} from "react";
import NavMenu from "../NavMenu.tsx";


const MenuEssentialOptions = ({...props}) => {

  const classes = ['vector', 'venom', 'rapier']

  const [selectedClass, setSelectedClass] = useState(classes[0])

  const footerLine1 = <>
    <Difficulty>novice</Difficulty>
    <TrackInfo style={{flex:2}}>a snowy tibetan mountain</TrackInfo>
  </>

  const footerLine2 = <Inputs>
    <KeyHint input="X" label="select"/>
    <KeyHint input="X" label="back" href="mainMenu"/>
  </Inputs>


  return <Menu
    header={<h1>Racing Class</h1>}
    pageTitle="Essential options"
    footerLine1={footerLine1}
    footerLine2={footerLine2}
    {...props}
  >
    <NavMenu options={classes.map(name => ({name, callback: setSelectedClass}))}/>

    <div style={{flex:2}}>
      {selectedClass}
    </div>
  </Menu>
}

export default MenuEssentialOptions


const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`

const Difficulty = styled.div`
  ${fontSet.info};
  display: flex;
  align-items: center;
  justify-content: center;
`

const TrackInfo = styled.div`
  ${fontSet.info};
  display: flex;
  align-items: center;
  justify-content: center;
`