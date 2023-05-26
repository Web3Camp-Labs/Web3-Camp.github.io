import styled from "styled-components";
import WhiteImg from "../assets/images/whiteLogo.png";

const Box = styled.div`
  background: #262626;
  color: #fff;
  padding: 40px 0;
`

const FirstLine = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
`

const LftBox = styled.div`
  width: 40%;
  img{
    height: 40px;
    margin-bottom: 10px;
  }
  .desc{
    opacity: 0.6;
  }
`
const RhtBox = styled.div`
`
export default function Footer(){
    return <Box>
        <div className="mainContent">
            <FirstLine>
                <LftBox>
                    <img src={WhiteImg} alt=""/>
                    <div className="desc">Our mission is to provide a platform for developers to learn about the blockchain and to provide a community of developers.</div>
                </LftBox>
                <RhtBox>dd</RhtBox>
            </FirstLine>
        </div>
    </Box>
}