import styled from "styled-components";
import {Row, Col, Card,Container,Button} from 'react-bootstrap';
import React, {useState} from "react";

const Box = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const HeaderTop = styled.div`
    height: 90px;
  display: flex;
  align-items: center;
`

const ContentBox = styled.div`
    flex-grow: 1;
  background: #F5F6F7;
  padding: 30px 0;
`
const Footer = styled.div`
  height: 80px;
  margin-top: 10px;
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
const LogoBox = styled.div`
    img{
      width: 200px;
    }
`

const CardBox = styled(Card as any)`
  border:0;
  //box-shadow: 0 0 5px #eee;
  box-shadow: 0px 20px 40px 0px #F7F7F7;
  border: 2px solid #fff;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0!important;
 
  .firstTR{
    display: flex;
    align-content: stretch;
  }
  .iconbox{
    width: 30%;
    display: flex;
    flex-shrink: 0;
    img{
      width: 100%;
      align-self: center;
    }
  }
   .middlebox{
     flex-grow: 1;
     padding: 20px;
   }
  .title{
    font-size: 22px;
    margin:10px 0  12px;
    color: #2D1D0A;
    line-height: 37px;
    font-weight: bolder;
    font-family: "Helvetica";
    
  }
  .content{
    opacity: 0.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: rgba(45, 29, 10, 0.6);
    font-weight: 400;
    font-size: 16px;
    font-family: "Helvetica";
  }
 
  .card{
    display: flex;
  }
  .card-body{
    height: 100%;
  }
  &:hover{
    border: 2px solid #F4F3F1;
    .content{
      color: #2D1D0A;
    }
  }
`

export default function List(){

    return <Box>
            <Container>
                <HeaderTop>
                    <LogoBox>
                        <img src="/assets/images/web3logo.png" alt=""/>
                    </LogoBox>
                </HeaderTop>
            </Container>

        <ContentBox>
            <Container>
                <Row>
                    {
                        [...Array(20)].map((item,index)=>( <Col md={3} key={index}>
                            <a href={item?.href} target="_blank" rel="noreferrer" >
                                <CardBox body>
                                    <div className="firstTR">
                                        <div className="iconbox" >
                                            <img src={item?.logo} alt=""/>
                                        </div>
                                        <div className="middlebox">
                                            <div className="title">{item?.name}</div>
                                            <div className="content">{item?.description}</div>
                                        </div>
                                    </div>
                                </CardBox>
                            </a>
                        </Col>))
                    }

                </Row>
            </Container>
        </ContentBox>
        <Container>
            <Footer>
                <div className="lft">&copy; 2024 Web3Camp Labs</div>
                <div>
                    <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer"><img src="/assets/images/github.png" alt=""/></a>
                </div>
            </Footer>
        </Container>

    </Box>
}
