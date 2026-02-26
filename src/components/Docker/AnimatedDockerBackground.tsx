import styled, { keyframes } from 'styled-components';

const AnimatedDockerBackground: React.FC = () => {
    return (
        <BackgroundContainer>
            {/* Floating Containers/Cubes */}
            <FloatingCube delay={0} size={40} left="10%" top="20%" opacity={0.1} duration={15} />
            <FloatingCube delay={2} size={60} left="80%" top="10%" opacity={0.05} duration={18} />
            <FloatingCube delay={5} size={30} left="30%" top="60%" opacity={0.08} duration={20} />
            <FloatingCube delay={1} size={50} left="70%" top="80%" opacity={0.06} duration={12} />
            <FloatingCube delay={8} size={25} left="50%" top="40%" opacity={0.09} duration={25} />
            <FloatingCube delay={3} size={45} left="20%" top="90%" opacity={0.07} duration={16} />

            {/* Grid Lines to represent structure/orchestration */}
            <GridLine top="30%" delay={0} />
            <GridLine top="70%" delay={2} />
            <VerticalGridLine left="25%" delay={1} />
            <VerticalGridLine left="75%" delay={3} />
        </BackgroundContainer>
    );
};

export default AnimatedDockerBackground;

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const flow = keyframes`
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 0.3; }
  100% { opacity: 0; transform: translateX(100vw); }
`;

const flowVertical = keyframes`
  0% { opacity: 0; transform: translateY(-100%); }
  50% { opacity: 0.3; }
  100% { opacity: 0; transform: translateY(100vh); }
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

const FloatingCube = styled.div<{ delay: number; size: number; left: string; top: string; opacity: number; duration: number }>`
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(14, 165, 233, ${props => props.opacity}); // Sky blue / Docker blue optimized
  border: 1px solid rgba(56, 189, 248, ${props => props.opacity * 2});
  border-radius: 8px;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  backdrop-filter: blur(2px);
  
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    border: 1px solid rgba(56, 189, 248, ${props => props.opacity});
    border-radius: 4px;
  }
`;

const GridLine = styled.div<{ top: string; delay: number }>`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent);
  animation: ${flow} 8s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const VerticalGridLine = styled.div<{ left: string; delay: number }>`
  position: absolute;
  left: ${props => props.left};
  top: 0;
  height: 100%;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.3), transparent);
  animation: ${flowVertical} 8s linear infinite;
  animation-delay: ${props => props.delay}s;
`;
