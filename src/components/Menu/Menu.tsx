import styled from 'styled-components'
import {ReactNode} from "react";
import {borderWidth, colors, fontSet} from "../../theme.ts";

interface Props {
  header: ReactNode,
  pageTitle: string,
  children: ReactNode,
  footerLine1: ReactNode
  footerLine2: ReactNode
}

const Menu = ({header, pageTitle, footerLine1, footerLine2, children, ...props}: Props) => {

  return <Wrapper {...props}>

    <Header>
      {header}
      <FsLogo src="/icon-f5000-header.svg" alt=""/>
    </Header>

    <PageTitle>
      <span>{pageTitle}</span>
    </PageTitle>

    <Main>{children}</Main>

    <Footer>{footerLine1}</Footer>

    <Footer>{footerLine2}</Footer>

  </Wrapper>
}

export default Menu

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: ${borderWidth.large} solid white;
  border-radius: 12rem 0 12rem 12rem;
  overflow: hidden;
  margin: 25rem auto;
  max-width: 120vh;
`

const Header = styled.header`
  background-color: #0b305e;
  height: 30rem;
  border-bottom: ${borderWidth.regular} solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FsLogo = styled.img`
  height: 80%;
  margin-right: 5rem;
`

const Main = styled.main`
  height: 75rem;
  border-bottom: ${borderWidth.regular} solid white;
  display: flex;

  > * {
    flex: 1;
    text-align: center;
    font-size: 8rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      border-right: ${borderWidth.regular} solid white;
    }
  }

  footer {
    border-top: ${borderWidth.regular} solid white;
    margin-top: auto;
    ${fontSet.info};
    height: 7rem;
  }
`

const Footer = styled.footer`
  display: flex;
  height: 13rem;
  background-color: ${colors.backgroundLight};

  &:not(:last-child) {
    border-bottom: ${borderWidth.regular} solid white;
  }

  > * {
    flex: 1;

    &:not(:last-child) {
      border-right: ${borderWidth.regular} solid white;
    }
  }
`

const PageTitle = styled.div`
  border-bottom: ${borderWidth.regular} solid white;
  background-color: ${colors.backgroundLight};
  height: 7rem;
  ${fontSet.info};
  padding-left: 7rem;
  display: flex;
  align-items: center;
`