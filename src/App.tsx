import styled from "styled-components";
import {colors} from "./theme.ts";

function App() {

  return (
    <>
      <Test>
        Magic here
      </Test>
    </>
  )
}

export default App

const Test = styled.div`
  font-size: 100px;
  color: ${colors.accent};
  
`