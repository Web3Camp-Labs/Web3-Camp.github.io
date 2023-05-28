import styled from "styled-components";
import BgImg from "../assets/images/banner.png";
import SwiperBox from "./swiperBox";
import Animation from "./animation";

const Box = styled.div`
    background: url(${BgImg}) no-repeat;
  background-size: 100%;
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

export default function Banner(){
    const ISSUE_LINK = 'https://github.com/Web3Camp-Labs/Web3Camp-Labs.github.io/issues/new?assignees=xrdavies%2Cwendychaung&labels=NEW&template=new.yml&title=%5BNEW%5D%3A+';


    return <Box>
        <Animation>
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
                        <a href={ISSUE_LINK} target="_blank" rel="noreferrer"> <BtnBox>Submit Your Choice</BtnBox></a>
                    </div>
                    <RhtBanner></RhtBanner>
                </FirstLine>


            <SwiperBox />

        </div>
        </Animation>
    </Box>
}