import styled from 'styled-components'
import {RequestedPage} from "../App.tsx";
import {fontSet} from "../theme.ts";

interface Props {
  input: string,
  label: string,
  href?:RequestedPage
}

const KeyHint = ({input, label, ...props}: Props) => {

  return <Wrapper {...props}>
    <svg viewBox="0 0 20 20">
      <circle cx={10} cy={10} r={10} fill="#646465"/>
      <path fill="none" stroke="#7CB2E8" strokeWidth="2" d="m4 4 12 12M16 4 4 16"/>
    </svg>
    {label}
  </Wrapper>
}

export default KeyHint

const Wrapper = styled.a`
  ${fontSet.info};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  
  svg {
    width: 11rem;
  }
`