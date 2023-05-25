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
      width: 33.33333%;
      display: flex;
      justify-content: center;
    }
`
export default function Countdown(){
    return <Box>
        <div className="inner">
            <div className="mainContent">
                <UlBox>
                    <li>ddd</li>
                    <li>ddd</li>
                    <li>ddd</li>
                </UlBox>
            </div>
        </div>
    </Box>
}