import React, { ReactNode, FC } from 'react'
import HeaderTop from "./headTop";
import styled from "styled-components";
import { Container, Row, Col, Card } from 'react-bootstrap';
// import  GlobalStyle from '../public/utils/GloablStyle'

const BgBox = styled("div")`

  @media(max-width: 1000px){
      padding: 0!important;
      box-sizing: border-box;
    
  }
`
const Footer = styled.div`
  height: 80px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  img{
    width: 40px;
    height: 40px;
  }
  .lft{
    padding-left: 10px;
  }
  a{
    display: inline-block;
    margin-left: 20px;
  }
`
const LinkBox = styled.div`
  margin:20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.6;
  .rht{
    padding-left: 20px;
    flex-grow: 1;
  }
`

interface LayoutProps {
  children: ReactNode;
}

export default function Layout<FC>({ children }: LayoutProps) {
  return <div>
    {/*<HeaderTop />*/}
    <BgBox>
      {children}

    </BgBox>

    <Container>
      <Footer>
        <div className="lft">&copy; 2022 Web3Camp.us</div>
        <div>
          <a href="https://github.com/Web3Camp-Labs/graphic-assets" target="_blank" rel="noreferrer">Design Resources</a>
          <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer"><img src="/assets/images/github.png" alt="" /></a>
          <a href="https://twitter.com/Web3Camp" target="_blank" rel="noreferrer"><img src="/assets/images/Twitter.png" alt="" /></a>
        </div>
      </Footer>
      <LinkBox>
        <div>Friends links:</div>
        <div className="rht">
          <a href="https://xdag.io/" target="_blank" rel="noreferrer">xdag.io</a>
        </div>
      </LinkBox>
    </Container>


  </div>

}
