import React,{ ReactNode,FC } from 'react'
import HeaderTop from "./headTop";
import styled from "styled-components";
import {Container, Row, Col, Card} from 'react-bootstrap';
import  GlobalStyle from '../public/utils/GloablStyle'

const MainBox = styled.div`
    display: flex;
`

const BgBox = styled(Container)`
  margin-top: 30px;
`



interface LayoutProps {
    children: ReactNode;
}

export default function  Layout<FC>({ children}: LayoutProps ) {
    return <div>
            <HeaderTop />
            <MainBox>
                <BgBox>
                    { children }

                </BgBox>
               </MainBox>
                <GlobalStyle />
        </div>
}
