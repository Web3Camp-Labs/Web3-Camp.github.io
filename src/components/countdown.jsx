import styled from "styled-components";
import BgImg from "../assets/images/bg_banner.jpg";

const Box = styled.div`
    background: url(${BgImg}) center;
  background-size: 100%;
  background-attachment: fixed;
  height: 210px;
  .inner{
    background: rgba(0,0,0,.5);
    backdrop-filter: blur(1px);
    width: 100%;
    height: 100%;
  }
  .mainContent{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
`

const UlBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
    li{
      color: #fff;
      width: 25%;
      display: flex;
      align-content: center;
      justify-content: center;
      
    }
  .lft{
  display:flex;
    align-items: flex-start;
    margin-right: 20px;
    font-size: 18px;
    span{
      font-family: "Jost-SemiBold";
      font-size: 40px;
    }
  }
  .rht{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .title{
    font-size: 18px;
  }
  .tips{
    font-size: 14px;
    opacity: 0.6;
  }
`
export default function Countdown(){
    return <Box>
        <div className="inner">
            <div className="mainContent">
                <UlBox>
                    <li>
                        <div className="lft">
                            <span>324</span>
                        </div>
                        <div className="rht">
                            <div className="tit">DAO</div>
                            <div className="tips">collected</div>
                        </div>
                    </li>
                    <li>
                        <div className="lft">
                            <span>3243</span>+
                        </div>
                        <div className="rht">
                            <div className="tit">Chains' Logo</div>
                            <div className="tips">Provide</div>
                        </div>
                    </li>
                    <li>
                        <div className="lft">
                            <span>3243</span>+
                        </div>
                        <div className="rht">
                            <div className="tit">Chains' Faucet</div>
                            <div className="tips">Provide</div>
                        </div>
                    </li>
                    <li>
                        <div className="lft">
                            <span>3243</span>+
                        </div>
                        <div className="rht">
                            <div className="tit">Chains' RPC</div>
                            <div className="tips">Provide</div>
                        </div>
                    </li>
                </UlBox>
            </div>
        </div>
    </Box>
}