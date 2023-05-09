import styled from 'styled-components'
import {colors} from "../theme.ts";

interface Props {
  options: {
    name: string,
    callback?: (name: string) => void
  }[]
}

const NavMenu = ({options, ...props}: Props) => {

  return <Wrapper {...props}>
    {options.map(({name, callback}) =>
      <Item key={name} onClick={() => callback && callback(name)}>
        {name}
      </Item>
    )}
  </Wrapper>
}

export default NavMenu

const Wrapper = styled.div`
  padding: 3rem 0;
`

const Item = styled.div`
  cursor: pointer;
  
  &:hover {
    color: ${colors.accent};
  }
`