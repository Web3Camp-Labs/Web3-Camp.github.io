import styled from "styled-components";
import ResourceList from "../json/resourceList.json";

const Box = styled.div`
  padding: 80px 0;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const UlBox = styled.ul`
    display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
  border-radius: 10px;
  li{
    box-shadow: 0 2px 10px rgba(45,56,68,.1);
    width: 23%;
    box-sizing: border-box;
    padding: 40px;
  }
`

export default function Other(){
    return <Box>
        <div className="mainContent">
            <div className="titleBold">
              Other Resources
            </div>
            <UlBox>
                {
                    ResourceList.map((item,index)=>(  <li key={index}>
                        <div className="title">{item.title}</div>
                        <div className="subTitle">{item.subtitle}</div>
                        <div className="logo">
                            <img src={item.logo} alt=""/>
                        </div>
                    </li>))
                }

            </UlBox>
        </div>
    </Box>
}