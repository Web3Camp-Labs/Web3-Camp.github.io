import styled from "styled-components";

const Box  = styled.div`
  padding: 80px 0;
  position: relative;
`
const InnerBox = styled.div`
  .box {
    width: 200px;
    height: 200px;

    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    position: absolute;
    top: 20%;
    right:20%;
    transform: translate(-50%, -50%);
    /* margin-left: 42%; */
    /* margin-top: 22%; */
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(13deg);
    -webkit-animation: move 5s linear infinite;
  }
  .minbox {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    top: 30px;
    -webkit-transform-style: preserve-3d;
  }
  .minbox li {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .minbox li:nth-child(1) {
    background: url(./01.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: translateZ(50px);
  }
  .minbox li:nth-child(2) {
    background: url(./02.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(180deg) translateZ(50px);
  }
  .minbox li:nth-child(3) {
    background: url(./03.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(-90deg) translateZ(50px);
  }
  .minbox li:nth-child(4) {
    background: url(./04.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(90deg) translateZ(50px);
  }
  .minbox li:nth-child(5) {
    background: url(./05.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(-90deg) translateZ(50px);
  }
  .minbox li:nth-child(6) {
    background: url(./06.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(90deg) translateZ(50px);
  }



  .maxbox li:nth-child(1) {
    background: url(./01.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: translateZ(50px);
  }
  .maxbox li:nth-child(2) {
    background: url(./02.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: translateZ(50px);
  }
  .maxbox li:nth-child(3) {
    background: url(./03.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(-90deg) translateZ(50px);
  }
  .maxbox li:nth-child(4) {
    background: url(./04.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateX(90deg) translateZ(50px);
  }
  .maxbox li:nth-child(5) {
    background: url(./05.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(-90deg) translateZ(50px);
  }
  .maxbox li:nth-child(6) {
    background: url(./06.jpeg) no-repeat 0 0;
    background-size: 100% 100%;
    -webkit-transform: rotateY(90deg) translateZ(50px);
  }
  .maxbox {
    width: 800px;
    height: 400px;
    position: absolute;
    left: 0;
    top: -20px;
    -webkit-transform-style: preserve-3d;
  }
  .maxbox li {
    width: 200px;
    height: 200px;
    background: #fff;
    border: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.2;
    -webkit-transition: all 1s ease;
  }
  .maxbox li:nth-child(1) {
    -webkit-transform: translateZ(100px);
  }
  .maxbox li:nth-child(2) {
    -webkit-transform: rotateX(180deg) translateZ(100px);
  }
  .maxbox li:nth-child(3) {
    -webkit-transform: rotateX(-90deg) translateZ(100px);
  }
  .maxbox li:nth-child(4) {
    -webkit-transform: rotateX(90deg) translateZ(100px);
  }
  .maxbox li:nth-child(5) {
    -webkit-transform: rotateY(-90deg) translateZ(100px);
  }
  .maxbox li:nth-child(6) {
    -webkit-transform: rotateY(90deg) translateZ(100px);
  }
  .box:hover ol li:nth-child(1) {
    -webkit-transform: translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(2) {
    -webkit-transform: rotateX(180deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(3) {
    -webkit-transform: rotateX(-90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(4) {
    -webkit-transform: rotateX(90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(5) {
    -webkit-transform: rotateY(-90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  .box:hover ol li:nth-child(6) {
    -webkit-transform: rotateY(90deg) translateZ(300px);
    width: 400px;
    height: 400px;
    opacity: 0.8;
    left: -100px;
    top: -100px;
  }
  @keyframes move {
    0% {
      -webkit-transform: rotateX(13deg) rotateY(0deg);
    }
    100% {
      -webkit-transform: rotateX(13deg) rotateY(360deg);
    }
  }
`
export default function Animation(props){
    return <Box>
        <InnerBox >
            <div className="box">
                <ul className="minbox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ol className="maxbox">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>

        </InnerBox>
        <>{props.children}</>
    </Box>
}