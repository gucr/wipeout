import MenuEssentialOptions from "./components/Menu/MenuEssentialOptions.tsx";
import {useState} from "react";
import MenuRacingMode from "./components/Menu/MenuRacingMode.tsx";

const pages = {
  'mainMenu': MenuEssentialOptions,
  'menu/racing-mode': MenuRacingMode,
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
