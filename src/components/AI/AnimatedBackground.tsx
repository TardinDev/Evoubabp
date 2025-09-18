import styled, { keyframes } from 'styled-components';

const AnimatedBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      <FloatingElement delay={0} size={8} />
      <FloatingElement delay={2} size={12} />
      <FloatingElement delay={4} size={6} />
      <FloatingElement delay={1} size={10} />
      <FloatingElement delay={3} size={15} />
      <FloatingElement delay={5} size={9} />

      <NeuralNetwork>
        <Node top="20%" left="10%" />
        <Node top="60%" left="15%" />
        <Node top="40%" left="25%" />
        <Node top="70%" left="35%" />
        <Node top="30%" left="45%" />
        <Node top="80%" left="55%" />
        <Node top="25%" left="65%" />
        <Node top="50%" left="75%" />
        <Node top="75%" left="85%" />
        <Node top="35%" left="90%" />

        <Connection
          from={{ top: "20%", left: "10%" }}
          to={{ top: "40%", left: "25%" }}
        />
        <Connection
          from={{ top: "40%", left: "25%" }}
          to={{ top: "30%", left: "45%" }}
        />
        <Connection
          from={{ top: "60%", left: "15%" }}
          to={{ top: "70%", left: "35%" }}
        />
        <Connection
          from={{ top: "70%", left: "35%" }}
          to={{ top: "80%", left: "55%" }}
        />
        <Connection
          from={{ top: "30%", left: "45%" }}
          to={{ top: "25%", left: "65%" }}
        />
        <Connection
          from={{ top: "25%", left: "65%" }}
          to={{ top: "50%", left: "75%" }}
        />
        <Connection
          from={{ top: "80%", left: "55%" }}
          to={{ top: "75%", left: "85%" }}
        />
      </NeuralNetwork>
    </BackgroundContainer>
  );
};

export default AnimatedBackground;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

const connectionPulse = keyframes`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
`;

const FloatingElement = styled.div<{ delay: number; size: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(247, 147, 251, 0.3));
  border-radius: 50%;
  animation: ${float} ${props => 6 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${() => Math.random() * 80 + 10}%;
  left: ${() => Math.random() * 80 + 10}%;
  filter: blur(1px);
`;

const NeuralNetwork = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Node = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 4px;
  height: 4px;
  background: #667eea;
  border-radius: 50%;
  animation: ${pulse} 3s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
`;

const Connection = styled.div<{
  from: { top: string; left: string };
  to: { top: string; left: string };
}>`
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.3), rgba(247, 147, 251, 0.3));
  transform-origin: left center;
  animation: ${connectionPulse} 4s ease-in-out infinite;

  ${props => {
    const fromTop = parseFloat(props.from.top);
    const fromLeft = parseFloat(props.from.left);
    const toTop = parseFloat(props.to.top);
    const toLeft = parseFloat(props.to.left);

    const deltaX = toLeft - fromLeft;
    const deltaY = toTop - fromTop;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    return `
      top: ${props.from.top};
      left: ${props.from.left};
      width: ${distance}%;
      transform: rotate(${angle}deg);
    `;
  }}
`;