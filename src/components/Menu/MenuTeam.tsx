import Menu from "./Menu.tsx";
import KeyHint from "../KeyHint.tsx";
import styled from "styled-components";
import {colors, fontSet} from "../../theme.ts";
import {useState} from "react";
import NavMenu from "../NavMenu.tsx";

const statKeys = ['thrust', 'top speed', 'turning ability', 'shield energy', 'aerodynamics']

const teams = {
  'Feisar': {
    'description': '',
    'thrust': 60,
    'top speed': 25,
    'turning ability': 65,
    'shield energy': 55,
    'aerodynamics': 65,
  },
  'AG Systems': {
    'description': '',
    'thrust': 0,
    'top speed': 0,
    'turning ability': 0,
    'shield energy': 0,
    'aerodynamics': 0,
  },
  'Auricom': {
    'description': '',
    'thrust': 0,
    'top speed': 0,
    'turning ability': 0,
    'shield energy': 0,
    'aerodynamics': 0,
  },
  'Quirex': {
    'description': '',
    'thrust': 0,
    'top speed': 0,
    'turning ability': 0,
    'shield energy': 0,
    'aerodynamics': 0,
  },
}

const MenuEssentialOptions = ({...props}) => {

  const [selectedTeam, setSelectedTeam] = useState('Feisar')

  const currentTeam = teams[selectedTeam]

  const footerLine1 = <>
    <TeamInfo>{currentTeam.description}</TeamInfo>
  </>

  const footerLine2 = <Inputs>
    <KeyHint input="X" label="select"/>
    <KeyHint input="X" label="back" href="mainMenu"/>
  </Inputs>

  const menuOptions = Object.keys(teams).map(name => ({name, callback: setSelectedTeam}))

  return <Menu
    header={<h1>Team menu</h1>}
    pageTitle="Team mode"
    footerLine1={footerLine1}
    footerLine2={footerLine2}
    {...props}
  >
    <TeamNavMenu options={menuOptions}/>

    <div>
      {selectedTeam}
      {statKeys.map(statKey => <StatLine key={statKey}>
        <div>{statKey}</div>
        <StatBar>
          <div style={{width: `${teams[selectedTeam][statKey]}%`}}></div>
        </StatBar>
      </StatLine>)}
    </div>
  </Menu>
}

export default MenuEssentialOptions


const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`

const TeamInfo = styled.div`
  ${fontSet.info};
  padding: 0 7rem;
  display: flex;
  align-items: center;
`

const TeamNavMenu = styled(NavMenu)`
  text-align: left;
  padding-left: 7rem;
  flex: .7;
`

const StatLine = styled.div`
  ${fontSet.info};
  display: flex;
  text-align: left;
  padding: 0 6rem;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;

  > div {
    flex: 1;
  }
`

const StatBar = styled.div`
  height: 4rem;
  background-color: ${colors.selection};
  margin-left: 3rem;

  div {
    height: 100%;
    background-color: ${colors.accent2};
  }
`