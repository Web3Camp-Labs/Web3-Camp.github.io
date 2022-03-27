import React, {ReactNode, useEffect, useState, useRef, ChangeEvent, ReactElement, ComponentType} from "react";
import type { NextPage } from 'next'
import styled from "styled-components";
import {Row, Col, Card,Container,Button} from 'react-bootstrap';
import Layout from "../components/layout";
import ListJson from '../public/json/list.json';

const CardBox = styled(Card)`
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
const ColBox = styled(Col)`
  display: flex;
  align-content: stretch;
  a{
    display: flex;
    align-content: stretch;
  }
`
const MainBox = styled.div`
  background: url("/assets/images/TopBg.gif") no-repeat center -50px;
  background-size: 1440px ;
  padding-top: 30px;
`
const BannerBox = styled(Container)`
  .mainTitle{
    font-family: "AdobeGurmukhi-Bold";
    font-size: 80px;
    text-align: center;
    line-height: 1em;
    color: #2f1e0a;
    margin: 60px 0 15px;
  }
  .subTitle{
    text-align: center;
    font-size: 28px;
    color: #2D1D0ACC;
  }
`
const LogoBox = styled.div`
    img{
      width: 200px;
    }
`
const ButtonBox = styled("div")`
    text-align: center;
  margin: 60px 0 120px;
  .centerBtn{
    background:#2f1e0a!important;
    border: 2px solid #2f1e0a ;
    border-radius: 8px;
    font-family: "Helvetica";
    font-size: 20px;
    padding: 8px 20px;
    color: white;
    &:hover{
      background: transparent!important;
      color: #2f1e0a;
    }
    &:focus{
      outline: none!important;
    }
  }
`

const ISSUE_LINK = 'https://github.com/Web3-Camp/Web3-Camp.github.io/issues/new?assignees=xrdavies%2Cwendychaung&labels=NEW&template=new.yml&title=%5BNEW%5D%3A+';

interface listObj{
    name: string;
    logo: string;
    href: string;
    description: string;
}
export default function  Home<NextPage>() {
   const [list,setList] = useState<listObj[]>([])

    useEffect(()=>{
        setList(ListJson)
    },[])
  return (
      <MainBox>
          <BannerBox>
              <LogoBox>
                  <img src="/assets/images/web3logo.png" alt=""/>
              </LogoBox>
                <div>
                    <div className="mainTitle">Tools and resources for all<br />  Web 3.0 enthusiasts</div>
                    <div className="subTitle">Sharpen your weapon and get started with Web 3.0 from here.</div>
                    <ButtonBox>
                        {/*<button>Get Started</button>*/}
                        <a href={ISSUE_LINK} target="_blank" rel="noreferrer" className="centerBtn">Submit Your Choice</a>
                    </ButtonBox>
                </div>
          </BannerBox>
          <Container>
              <Row>
                  {
                      list.map((item,index)=>(<ColBox md={4} xs={12} key={index}>
                              <a href={item.href} target="_blank" rel="noreferrer" >
                                  <CardBox body>
                                      <div className="firstTR">
                                          <div className="iconbox" >
                                              <img src={item.logo} alt=""/>
                                          </div>
                                          <div className="middlebox">
                                              <div className="title">{item.name}</div>
                                              <div className="content">{item.description}</div>
                                          </div>
                                      </div>
                                  </CardBox>
                              </a>
                          </ColBox>

                      ))
                  }
              </Row>
          </Container>

      </MainBox>
  )
}



interface LayoutProps {
  children: ReactNode;
}


Home.getLayout = function getLayout(page:LayoutProps) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}
