import ReactCurvedText from "react-curved-text";
import { keyframes, styled } from "styled-components";

export function GreetingsRight() {
  return (
    <div
      style={{
        width: "100",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ArcText style={{ width: 600, height: 600 }}>
        <ReactCurvedText
          width={600}
          height={600}
          cx={300}
          cy={300}
          rx={200}
          ry={200}
          startOffset={0}
          reversed={false}
          text="OpenSource Lee Jisoo"
          textProps={{ style: { fontSize: 80, fontFamily: 'Cafe'} }}
        />
      </ArcText>
    </div>
  );
}
export function GreetingsLeft() {
  const text =
  "Hello. this is JiSoo's self-introduction page.\nI talk about my introduction, motto, and areas of interest in order.\n I hope you can get to know me through this page.\n"

  const text2 = 
  "Use mouseover actively to see hidden characters.\n Definitely!"
    // "LeeJisoo Pommicheotda\n Let me introduce myself its hard to making website \n LeeJisoo Pommicheotda\nLet me introduce myself\nits hard to making website";
  return (
    <div style={{ padding: '10%' }}>
      <div
        style={{ fontSize: 40, whiteSpace: "pre-line", fontFamily: "cafe", color: 'white'}}
      >
        {text}
      </div>
      <div
        style={{ fontSize: 42, whiteSpace: "pre-line", fontFamily: "cafe", color: 'white', marginTop: 20}}
      >
        {text2}
      </div>
      
    </div>
  );
}

const arcRotate = keyframes`
  0% {
    opacity: 1;
    top: 20px;
 
  }
  50% {
    opacity: 0;
    top: 400px;
  }
  100% {
    opacity: 1;
    top: 20px;
  }
  `;
const animationContainer = styled.div`
  animation: ${arcRotate} 2s 1s infinite linear alternate;
`;

const ArcAnimation = keyframes`
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
`;
const ArcText = styled.div`
  animation: ${ArcAnimation} 4s 4s infinite linear;
`;
