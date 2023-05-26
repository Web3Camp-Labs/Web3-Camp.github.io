import styled from "styled-components";
import Web3Img from "../assets/images/stack/web3js.png";
import EthersImg from "../assets/images/stack/ethers.png";
import PolkadotImg from "../assets/images/stack/polkadot.png";
import SolidityImg from "../assets/images/stack/solidity.png";
import NodejsImg from "../assets/images/stack/nodejs.png";
import ReactImg from "../assets/images/stack/react.png";
import JavascriptImg from "../assets/images/stack/JavaScript.png";
import CssImg from "../assets/images/stack/CSS3.png";
import HTMLImg from "../assets/images/stack/html5.png"
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
    return <Box id="tutorial" className="wow animate__animated animate__zoomIn" data-wow-offset="500">
        <div className="mainContent">
            <div className="titleBold">
                Related Tutorials
            </div>
            <UlBox>
                <dl>
                    <a href="https://docs.web3js.org/" target="_blank" rel="noreferrer">
                        <img src={Web3Img} alt=""/>
                        <dt>Web3.js</dt>
                    </a>

                </dl>
                <dl>
                    <a href="https://ethers.org/" target="_blank" rel="noreferrer">
                        <img src={EthersImg} alt=""/>
                        <dt>Ethers.js</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://polkadot.js.org/" target="_blank" rel="noreferrer">
                    <img src={PolkadotImg} alt=""/>
                    <dt>Polkadot.js</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://docs.soliditylang.org/en/latest/" target="_blank" rel="noreferrer">
                    <img src={SolidityImg} alt=""/>
                    <dt>Solidity</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://learn.metamask.io/overview" target="_blank" rel="noreferrer">
                    <img src={Metamask} alt=""/>
                    <dt>Meta mask</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://hardhat.org/docs" target="_blank" rel="noreferrer">
                    <img src={HardhatImg} alt=""/>
                    <dt>Hardhat</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://nodejs.org/en/docs" target="_blank" rel="noreferrer">
                    <img src={NodejsImg} alt=""/>
                    <dt>Nodejs</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://react.dev/learn" target="_blank" rel="noreferrer">
                    <img src={ReactImg} alt=""/>
                    <dt>React</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://www.javascript.com/learn/strings" target="_blank" rel="noreferrer">
                    <img src={JavascriptImg} alt=""/>
                    <dt>Javascript</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://www.css3.com/" target="_blank" rel="noreferrer">
                    <img src={CssImg} alt=""/>
                    <dt>Css3</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://html5.org/" target="_blank" rel="noreferrer">
                    <img src={HTMLImg} alt=""/>
                    <dt>HTML5</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank" rel="noreferrer">
                    <img src={TsImg} alt=""/>
                    <dt>Typescript</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://sass-lang.com/documentation/" target="_blank" rel="noreferrer">
                    <img src={SassImg} alt=""/>
                    <dt>Sass</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://docs.github.com/zh/actions" target="_blank" rel="noreferrer">
                    <img src={GithubImg} alt=""/>
                    <dt>Github actions</dt>
                    </a>
                </dl>
                <dl>
                    <a href="https://thegraph.com/docs/en/" target="_blank" rel="noreferrer">
                    <img src={TheGraphImg} alt=""/>
                    <dt>The graph</dt>
                    </a>
                </dl>
            </UlBox>
        </div>
    </Box>
}