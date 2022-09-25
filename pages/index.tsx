import React, {ReactNode, useEffect, useState, useRef, ChangeEvent, ReactElement, ComponentType} from "react";
import type { NextPage } from 'next'
import styled from "styled-components";
import {Row, Col, Card,Container,Button} from 'react-bootstrap';
import Layout from "../components/layout";
import ListJson from '../public/json/list.json';
import RescourceList from "../public/json/resourceList.json";
import Link from "next/link";

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
  @media(max-width: 1000px){
    .mainTitle{
      font-size: 60px;
    }
    .subTitle{
      font-size: 20px;
    }
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
    background:#2D1D0A!important;
    border: 2px solid #2f1e0a ;
    border-radius: 8px;
    font-family: "Helvetica";
    font-size: 20px;
    padding: 8px 20px;
    color: white;
    &:hover{
      //background: transparent!important;
      background: #443727!important;
    }
    &:focus{
      outline: none!important;
    }
  }
`


const ResourceBox = styled.div`
    background: #FAFBFC;
    margin-top: 60px;
    padding: 40px 0 160px;
`
const ReBox = styled(Col)`
  margin-bottom: 30px;
  .hoverBtn{
    visibility: hidden;
    border-radius: 6px;
    border: 2px solid #2D1D0A;
    width: 120px;
    height: 32px;
    font-size: 12px;
    text-align: center;
    line-height: 32px;
    margin: 0 auto;
    cursor: pointer;
    background: url("/assets/images/Go.png") no-repeat 95px 8px;
  }
  .subTitle{
    width: 42px;
    height: 17px;
    font-size: 14px;
    font-family: Helvetica;
    color: rgba(45, 29, 10, 0.5);
    line-height: 17px;
    margin-top: 4px;
    text-transform: uppercase;
  }
  .logo{
    width: 100%;
    height: 71px;
    margin-bottom: 9px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      max-height: 100%;
    }
  }
  .title{
    font-size: 16px;
    font-family: Helvetica;
    color: #2D1D0A;
    line-height: 19px;
    text-transform: uppercase;
  }
  &:hover{
    .hoverBtn{
      visibility: visible;
      color: #301C06;

    }
  }
`
const ReCard = styled(Card)`
  background: #FAFBFC;
  box-shadow: 0 20px 40px 0 #F7F7F7;
  border-radius: 20px;
  padding: 0 25px;
  border: 2px solid #F7F7F7;
  &:hover{
    border: 2px solid #301C06;
  }
`
const ReTitle = styled.div`
    text-align: center;
  margin-bottom: 65px;
  font-size: 40px;
  font-weight: bold;
  color: #2D1D0A;
  span{
    font-family: "AdobeGurmukhi-Bold";
    display: inline-block;
    line-height: 56px;
    padding-left:30px;
    background: url("/assets/images/bg.png") no-repeat;
  }
`

const ISSUE_LINK = 'https://github.com/Web3Camp-Labs/Web3Camp-Labs.github.io/issues/new?assignees=xrdavies%2Cwendychaung&labels=NEW&template=new.yml&title=%5BNEW%5D%3A+';


interface listObj{
    name: string;
    logo: string;
    href: string;
    description: string;
}
interface resouceObj{
    title: string;
    subtitle: string;
    logo: string;
    link: string;
}
export default function  Home<NextPage>() {
   const [list,setList] = useState<listObj[]>([])
   const [resouce,setResouce] = useState<resouceObj[]>([])

    useEffect(()=>{
        setList(ListJson)
        setResouce(RescourceList)
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
        <ResourceBox>

            <Container>
                <ReTitle><span>Other Resources</span></ReTitle>
                <Row>
                    {
                        resouce.map((item,index)=>(<ReBox md={3} xs={12} key={index}>
                            <ReCard body>
                                <div className="title">{item.title}</div>
                                <div className="subTitle">{item.subtitle}</div>
                                <div className="logo">
                                    <img src={item.logo} alt=""/>
                                </div>
                                <a href={item.link} target="_blank" rel="noreferrer"><div className="hoverBtn">GO TO</div></a>
                            </ReCard>
                        </ReBox>))
                    }

                </Row>
            </Container>
        </ResourceBox>
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
