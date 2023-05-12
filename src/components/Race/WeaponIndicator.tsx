import styled from 'styled-components'

interface Props {

}

const WeaponIndicator = ({...props}:Props) => {

  return <Wrapper viewBox="0 0 100 100" stroke="#37f915" fill="none" {...props}>
    <path opacity=".7" fill="#3fbc20" d="M14 16 7 9l-7 7v27l7 7 7-7zM14 57l-7-7-7 7v27l7 7 7-7zM16 0 9 7l7 7h27l7-7-7-7zM57 0l-7 7 7 7h27l7-7-7-7zM86 84l7 7 7-7V57l-7-7-7 7zM86 43l7 7 7-7V16l-7-7-7 7zM84 100l7-7-7-7H57l-7 7 7 7zM43 100l7-7-7-7H16l-7 7 7 7z"/>
    <g opacity=".6">
        <path d="m57 17-7-7-7 7v24l7 7 7-7z"/>
        <path d="m57 59-7-7-7 7v24l7 7 7-7z"/>
        <path d="m17 43-7 7 7 7h24l7-7-7-7z"/>
        <path d="m37 43-7 7 7 7h26l7-7-7-7z"/>
        <path d="m59 43-7 7 7 7h24l7-7-7-7z"/>
        <path d="M17 73v10h11l19-20V53H37z"/>
        <path d="M47 73v10H36L17 63V53h10z"/>
        <path d="M53 73v10h11l19-20V53H73z"/>
        <path d="M83 73v10H72L53 63V53h10z"/>
        <path d="M53 37v10h11l19-20V17H73z"/>
        <path d="M83 37v10H72L53 27V17h10z"/>
        <path d="M17 37v10h11l19-20V17H37z"/>
        <path d="M47 37v10H36L17 27V17h10z"/>
    </g>

  </Wrapper>
}

export default WeaponIndicator

const Wrapper = styled.svg`
  width: 36rem;
  position: fixed;
  left: 50vw;
  margin-left: -18rem;
  top: 10rem;
`