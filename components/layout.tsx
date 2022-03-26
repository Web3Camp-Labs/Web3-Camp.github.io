import React,{ ReactNode,FC } from 'react'
import HeaderTop from "./headTop";
import styled from "styled-components";
import {Container, Row, Col, Card} from 'react-bootstrap';
// import  GlobalStyle from '../public/utils/GloablStyle'

const BgBox = styled("div")`

  @media(max-width: 1000px){
      padding: 0!important;
      box-sizing: border-box;
    
  }
`
const Footer = styled.div`
  height: 80px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
  }
  .lft{
    padding-left: 10px;
  }
`
interface LayoutProps {
    children: ReactNode;
}

export default function  Layout<FC>({ children}: LayoutProps ) {
    return<div>
            {/*<HeaderTop />*/}
            <BgBox>
                { children }

            </BgBox>

                <Container>
                    <Footer>
                        <div className="lft"><a href="https://web3camp.us">&copy; web3camp.us</a></div>
                        <div>
                            <a href="https://github.com/Web3-Camp" target="_blank" rel="noreferrer"><img src="/assets/images/GitHub-Mark.png" alt=""/></a>
                        </div>
                    </Footer>
                </Container>


           </div>

}
