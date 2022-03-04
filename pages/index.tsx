import React, {ReactNode, useEffect, useState, useRef, ChangeEvent, ReactElement, ComponentType} from "react";
import type { NextPage } from 'next'
import styled from "styled-components";
import {Row, Col, Card} from 'react-bootstrap';
import Layout from "../components/layout";
import ListJson from '../public/json/list.json';

const CardBox = styled(Card)`
  border:0;
  box-shadow: 0 0 5px #ccc;
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
    font-size: 16px;
    font-family: "din_bold";
    margin:10px 0  20px;
  }
  .content{
    opacity: 0.6;
  }
 
  .card{
    display: flex;
    
  }
  .card-body{
    height: 100%;
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
      <div>
          <Row>
              {
                  list.map((item,index)=>(<ColBox md={4} xs={12} key={index}>
                          <a href={item.href} target="_blank" rel="noreferrer">
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
      </div>
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
