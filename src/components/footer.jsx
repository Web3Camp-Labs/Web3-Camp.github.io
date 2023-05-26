import styled from "styled-components";
import WhiteImg from "../assets/images/whiteLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons';

const Box = styled.div`
  background: #262626;
  color: #fff;
  padding: 40px 0;
`

const FirstLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 40px;
  margin-bottom: 40px;
`

const LftBox = styled.div`
  width: 30%;
  img{
    height: 40px;
    margin-bottom: 10px;
  }
  .desc{
    opacity: 0.8;
  }
  .copy{
    font-size: 10px;
    margin-top: 10px;
    opacity: 0.6;
  }
`
const MidBox = styled.ul`
  display: flex;
  align-items: center;
  width: 40%;
  flex-wrap: wrap;
  height: 100%;
    li{
      width: 33.3333333%;
      margin: 10px 0;
      cursor: pointer;
    }
`
const RhtBox = styled.div`
  .tit{
    margin-bottom: 10px;
  }
`

const SecondLine = styled.div`
    display: flex;
  align-items: flex-start;
  opacity: 0.4;
  .lft{
    margin-right: 10px;
  }
  a{
    color: #fff;
    margin-right: 20px;
  }
`
export default function Footer(){

    const toGo = (selector) =>{
        document.querySelector(selector).scrollIntoView({
            behavior:"smooth"
        });

    }

    return <Box>
        <div className="mainContent">
            <FirstLine>
                <LftBox>
                    <div>
                        <img src={WhiteImg} alt=""/>
                        <div className="desc">Our mission is to provide a platform for developers to learn about the blockchain and to provide a community of developers.</div>
                    </div>
                    <div className="copy">Copyright © 2023 Web3Camp.us </div>
                </LftBox>
                <MidBox>
                    <li onClick={()=>toGo("#home")}>Home</li>
                    <li onClick={()=>toGo("#about")}>About Us</li>
                    <li onClick={()=>toGo("#join")}>Join Us</li>
                    <li onClick={()=>toGo("#tools")}>Tools</li>
                    <li onClick={()=>toGo("#tutorial")}>Tutorials</li>
                    <li onClick={()=>toGo("#other")}>Other Resources</li>
                </MidBox>

                <RhtBox>
                    <div className="tit">Follow us</div>
                    <div>

                        <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",fontSize:"24px"}}  /></a>
                        <a href="https://twitter.com/Web3Camp" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",fontSize:"24px",marginLeft:"20px"}}  /></a>
                    </div>
                </RhtBox>
            </FirstLine>
            <SecondLine>
                <div className="lft">
                    Friends Links :
                </div>
                <div>
                    <a href="https://rebase.network/ " target="_blank" rel="noreferrer">Rebase.network</a>
                    <a href="https://xdag.io/" target="_blank" rel="noreferrer">XDAG</a>
                    <a href="https://learnblockchain.cn/" target="_blank" rel="noreferrer">登链社区</a>
                    <a href="https://daopark.xyz" target="_blank" rel="noreferrer">DAO park</a>
                </div>
            </SecondLine>
        </div>
    </Box>
}