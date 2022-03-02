import React, {ReactNode, useEffect, useState, useRef, ChangeEvent, ReactElement, ComponentType} from "react";
import type { NextPage } from 'next'
import styled from "styled-components";
import {Row, Col, Card} from 'react-bootstrap';
import { Wallet, Wallet2 } from 'react-bootstrap-icons';
import Layout from "../components/layout";

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
    width: 50%;
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
  .eth{
    background: url("/assets/images/eth-diamond-black-white.jpeg") center no-repeat ;
    background-size: 100%;
  }
  .polkadot{
    background: url("/assets/images/polkadot.png") center no-repeat ;
    background-size: 100%;
  }
  .token{
    background: url("/assets/images/Logo67.png") center no-repeat ;
    background-size: 100%;
  }
`

export default function  Home<NextPage>() {

  return (
      <div>

          <Row>
              <Col md={4} xs={12}>
                  <a href="/ETH-Wallet-Generator/" target="_blank" rel="noreferrer">
                  <CardBox body>
                      <div className="firstTR">
                          <div className="iconbox eth">
                              {/*<img src="/assets/images/eth-diamond-black-white.jpeg" alt=""/>*/}
                          </div>

                          <div className="middlebox">
                              <div className="title">ETH Wallet Generator</div>
                              <div className="content">Generate ETH Wallet Address in pure webpage from scratch!</div>
                          </div>
                      </div>
                  </CardBox>
                  </a>
              </Col>
              <Col md={4} xs={12}>
                  <a href="/Polkadot-Wallet-Generator/" target="_blank" rel="noreferrer">
                      <CardBox body>
                          <div className="firstTR">
                              <div className="iconbox polkadot">
                                  {/*<img src="/assets/images/polkadot-dot1469.jpeg" alt=""/>*/}
                              </div>

                              <div className="middlebox">
                                  <div className="title">Polkadot Wallet Generator</div>
                                  <div className="content">Generate Polkadot Wallet Address with @Polkadot/api !</div>
                              </div>
                          </div>
                      </CardBox>
                  </a>
              </Col>
              <Col md={4} xs={12}>
                  <a href="/batch-sender/index.html" target="_blank" rel="noreferrer">
                      <CardBox body>
                          <div className="firstTR">
                              <div className="iconbox token">
                                  {/*<img src="/assets/images/polkadot-dot1469.jpeg" alt=""/>*/}
                              </div>

                              <div className="middlebox">
                                  <div className="title">Token Batch Sender</div>
                                  <div className="content">It supports sending ERC20 tokens and ETH!</div>
                              </div>
                          </div>
                      </CardBox>
                  </a>
              </Col>
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
