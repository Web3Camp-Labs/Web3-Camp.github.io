import styled from "styled-components";
import Web3Img from "../assets/images/stack/web3js.png";
import EthersImg from "../assets/images/stack/ethers.png";
import PolkadotImg from "../assets/images/stack/polkadot.png";
import SolidityImg from "../assets/images/stack/solidity.png";
import NodejsImg from "../assets/images/stack/nodejs.png";
import ReactImg from "../assets/images/stack/react.png";
import JavascriptImg from "../assets/images/stack/JavaScript.png";
import CssImg from "../assets/images/stack/CSS3.png";
import HTMLImg from "../assets/images/stack/HTML5.svg"
import TsImg from "../assets/images/stack/Typescript.png";
import Metamask from "../assets/images/stack/metamask.png";
import SassImg from "../assets/images/stack/sass.png";
import HardhatImg from "../assets/images/stack/hardhat.png";
import GithubImg from "../assets/images/stack/action.png";
import TheGraphImg from "../assets/images/stack/thegraph.png";

const Box = styled.div`
    padding: 80px 0;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const UlBox = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
    dl{
      text-align: center;
      width: 20%;
      margin-bottom: 40px;
      dt{
        color: #8a8fa3;
        padding-top: 10px;
      }
      img{
        max-height: 60px;
      }
      
    }
`
export default function Stack(){
    return <Box>
        <div className="mainContent">
            <div className="titleBold">
                Related tutorials
            </div>
            <UlBox>
                <dl>
                    <img src={Web3Img} alt=""/>
                    <dt>Web3.js</dt>
                </dl>
                <dl>
                    <img src={EthersImg} alt=""/>
                    <dt>Ethers.js</dt>
                </dl>
                <dl>
                    <img src={PolkadotImg} alt=""/>
                    <dt>Polkadot.js</dt>
                </dl>
                <dl>
                    <img src={SolidityImg} alt=""/>
                    <dt>Solidity</dt>
                </dl>
                <dl>
                    <img src={Metamask} alt=""/>
                    <dt>Meta mask</dt>
                </dl>
                <dl>
                    <img src={HardhatImg} alt=""/>
                    <dt>Hardhat</dt>
                </dl>
                <dl>
                    <img src={NodejsImg} alt=""/>
                    <dt>Nodejs</dt>
                </dl>
                <dl>
                    <img src={ReactImg} alt=""/>
                    <dt>React</dt>
                </dl>
                <dl>
                    <img src={JavascriptImg} alt=""/>
                    <dt>Javascript</dt>
                </dl>
                <dl>
                    <img src={CssImg} alt=""/>
                    <dt>Css3</dt>
                </dl>
                <dl>
                    <img src={HTMLImg} alt=""/>
                    <dt>HTML5</dt>
                </dl>
                <dl>
                    <img src={TsImg} alt=""/>
                    <dt>Typescript</dt>
                </dl>
                <dl>
                    <img src={SassImg} alt=""/>
                    <dt>Sass</dt>
                </dl>
                <dl>
                    <img src={GithubImg} alt=""/>
                    <dt>Github actions</dt>
                </dl>
                <dl>
                    <img src={TheGraphImg} alt=""/>
                    <dt>The graph</dt>
                </dl>
            </UlBox>
        </div>
    </Box>
}