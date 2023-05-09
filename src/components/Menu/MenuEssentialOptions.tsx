import Menu from "./Menu.tsx";
import Button from "../Button.tsx";
import KeyHint from "../KeyHint.tsx";


const MenuEssentialOptions = ({...props}) => {

  const footerLine1 = <Button>Start</Button>

  const footerLine2 = <>
    <div>
      <KeyHint input="X" label="select"/>
    </div>
    <Button>
      options
    </Button>
    <div>
    </div>
  </>

  return <Menu
    header={<></>}
    pageTitle="Essential options"
    footerLine1={footerLine1}
    footerLine2={footerLine2}
    {...props}
  >
    <a href={"#menu/racing-mode"}>
      <div>race<br/>type</div>
      <footer>arcade</footer>
    </a>
    <div>
      <div>team</div>
      <footer>feisar</footer>
    </div>
    <div>
      <div>class<br/> and<br/> track</div>
      <footer>talon's reach</footer>
    </div>
  </Menu>
}

export default MenuEssentialOptions
