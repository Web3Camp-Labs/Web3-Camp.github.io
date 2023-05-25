import styled from "styled-components";
import BgImg from "../assets/images/banner.png";

const Box = styled.div`
    background: url(${BgImg}) no-repeat;
  background-size: 100%;
  padding: 80px 0;
  box-sizing: border-box;
`

const FirstLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  .lft{
    flex-shrink: 0;
  }
  .titleBanner{
    font-family: "Jost-ExtraBold";
    font-size: 70px;
    width: 900px;
    line-height: 1.2em;
  }
  .Welcome{
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #f3801f;
    //color: #8a8fa3;
    margin-bottom: 10px;
  }
  .tips{
    color: #8a8fa3;
    margin-top: 20px;
  }
`

const BtnBox = styled.div`
    background: #f3801f;
  display: inline-block;
  margin-top: 40px;
  padding: 16px 48px;
  color: #fff;
  border-radius: 10px;
`

const RhtBanner = styled.div`
`

const AdvLine = styled.ul`
    display: flex;
  align-items: center;
  margin-top: 100px;
  li{
    width: 32%;
    margin-right: 2%;
    height: 160px;
    background: #fff;
    box-shadow: 0 12px 30px rgba(45,56,68,.15);
    border-radius: 10px;
    overflow: hidden;
    &:last-child{
      margin-right: 0;
    }
    img{
      width: 100%;
    }
  }
  
`
export default function Banner(){
    return <Box>
        <div className="mainContent">
            <FirstLine>
                <div className="lft">
                    <div className="Welcome">
                        Welcome  to  Web3Camp.us
                    </div>
                    <div className="titleBanner">
                        Tools and resources for all
                        Web 3.0 enthusiasts
                    </div>
                    <div className="tips">
                        Sharpen your weapon and get started with Web 3.0 from here.
                    </div>
                    <BtnBox>Submit Your Choice</BtnBox>
                </div>
                <RhtBanner></RhtBanner>
            </FirstLine>
            <AdvLine>
                <li></li>
                <li></li>
                <li></li>
            </AdvLine>
        </div>
    </Box>
}