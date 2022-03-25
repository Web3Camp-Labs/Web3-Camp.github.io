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
interface LayoutProps {
    children: ReactNode;
}

export default function  Layout<FC>({ children}: LayoutProps ) {
    return<div>
            {/*<HeaderTop />*/}
            <BgBox>
                { children }

            </BgBox>
           </div>

}
