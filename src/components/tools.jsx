import styled from "styled-components";

const Box = styled.div`
  padding: 80px 0;
  .mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .tools{
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #f3801f;
    //color: #8a8fa3;
    margin-bottom: 10px;
  }
`

const ListUl = styled.ul`
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  li{
    border: 1px solid #eee;
    border-radius: 5px;
    width: 32%;
    margin-right: 2%;
    padding: 20px;
    box-sizing: border-box;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
`
export default function Tools(){
    return <Box>
        <div className="mainContent">
            <div className="tools">Our tools</div>
            <div className="titleBold">
                We Have Completed Latest Tools
            </div>
            <ListUl>
                <li></li>
                <li></li>
                <li></li>
            </ListUl>
        </div>
    </Box>
}