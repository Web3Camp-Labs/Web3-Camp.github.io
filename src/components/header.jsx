import styled from "styled-components";
import LogoImg from "../assets/images/web3logo.png";
import GithubImg from "../assets/images/github.png";
import TwitterImg from "../assets/images/Twitter.png";

const Box = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 12px 30px rgba(45,56,68,.05);
  padding: 20px 40px;
  .logo{
    height: 35px;
  }
`
const RhtBox = styled.div`
  display: flex;
  align-items: center;
    img{
      width: 20px;
      margin-left: 20px;
    }
`

const UlBox = styled.ul`
    display: flex;
  align-items: center;
  margin-right: 20px;
  li{
    margin-left: 40px;
    cursor: pointer;
  }
`
export default function Header(){

    const toGo = (selector) =>{
        document.querySelector(selector).scrollIntoView({
            behavior:"smooth"
        });

    }

    return <Box id="home">
        <div>
            <img src={LogoImg} alt="" className="logo" />
        </div>

        <RhtBox>
            <UlBox>
                <li onClick={()=>toGo("#about")}>About Us</li>
                <li onClick={()=>toGo("#join")}>Join Us</li>
                <li onClick={()=>toGo("#tools")}>Tools</li>
                <li onClick={()=>toGo("#tutorial")}>Related Knowledge</li>
                <li onClick={()=>toGo("#other")}>Other Resources</li>
            </UlBox>
            <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer"> <img src={GithubImg} alt=""/></a>
            <a href="https://twitter.com/Web3Camp" target="_blank" rel="noreferrer"><img src={TwitterImg} alt=""/></a>

        </RhtBox>
    </Box>
}