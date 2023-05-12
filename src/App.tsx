import MenuEssentialOptions from "./components/Menu/MenuEssentialOptions.tsx";
import {useState} from "react";
import MenuClassTrack from "./components/Menu/MenuClassTrack.tsx";
import MenuTeam from "./components/Menu/MenuTeam.tsx";
import MenuRaceType from "./components/Menu/MenuRaceType.tsx";

const pages = {
  'mainMenu': MenuEssentialOptions,
  'menu/race-type': MenuRaceType,
  'menu/class-track': MenuClassTrack,
  'menu/team': MenuTeam,
}

export type RequestedPage = keyof typeof pages

function App() {

  const [hash, setHash] = useState(window.location.hash)
  window.addEventListener("hashchange", () => setHash(window.location.hash))

  const requestString = hash.replace('#','') as RequestedPage
  const DisplayedPage = pages[requestString || 'mainMenu']

  return (
    <>
      <DisplayedPage/>
    </>
  )
}

export default App
