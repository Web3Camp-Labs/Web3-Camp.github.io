import styled from "styled-components";
import OrangeImg from "../assets/images/bg_banner.jpg";

const Box = styled.div`
    background: url(${OrangeImg});
  background-size: 100%;
  background-attachment: fixed;
  color: #fff;
  box-sizing: border-box;

  .inner{
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    padding: 50px 0;
  }
  .mainContent{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a{
    color: #fff;
  }
`
const LftBox = styled.div`
    width: 80%;
  .titleJoin{
    font-family: "Jost-Bold";
    font-size: 22px;
    padding-bottom: 20px;
  }
  .tips{
    font-size: 14px;
  }
`

const RhtBox = styled.div`
    flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 10px 20px;
  font-family: "Jost-SemiBold";
  color: #fff;
`
export default function Line(){
    return <Box>
        <div className="inner">
        <div className="mainContent wow animate__animated animate__backInRight" data-wow-offset="450">

                <LftBox>
                    <div className="titleJoin">Join Us</div>
                    <div className="tips">Whether you are a developer, investor, researcher, or just a casual user who wants to learn about Web3 technologies, Web3Camp can provide you with useful resources, knowledge, and support to help you better explore and apply Web3 technologies.</div>
                </LftBox>
            <a href="https://github.com/Web3Camp-Labs" target="_blank" rel="noreferrer">
                <RhtBox>Join Us</RhtBox>
            </a>

            </div>

        </div>
    </Box>
}