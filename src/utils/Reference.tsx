import styled from 'styled-components'

interface Props {
  /* The reference file name in the public/references folder */
  fileName: string
}

const Reference = ({fileName, ...props}: Props) => {

  return <Wrapper {...props}>
    <img src={`/public/references/${fileName}`} alt=""/>
  </Wrapper>
}

export default Reference

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: .3;
  top: 0;
  left: 0;
  pointer-events: none;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`