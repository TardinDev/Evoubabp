'use client'

interface FloatingCubeProps {
  delay: number;
  size: number;
  left: string;
  top: string;
  opacity: number;
  duration: number;
}

interface GridLineProps {
  top: string;
  delay: number;
}

interface VerticalGridLineProps {
  left: string;
  delay: number;
}

const FloatingCube: React.FC<FloatingCubeProps> = ({ delay, size, left, top, opacity, duration }) => {
  return (
    <div
      className="absolute rounded-lg backdrop-blur-[2px]"
      style={{
        left,
        top,
        width: `${size}px`,
        height: `${size}px`,
        background: `rgba(14, 165, 233, ${opacity})`,
        border: `1px solid rgba(56, 189, 248, ${opacity * 2})`,
        animation: `docker-float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* ::after pseudo-element */}
      <div
        className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded"
        style={{
          border: `1px solid rgba(56, 189, 248, ${opacity})`,
        }}
      />
    </div>
  );
};

const GridLine: React.FC<GridLineProps> = ({ top, delay }) => {
  return (
    <div
      className="absolute left-0 w-full h-px"
      style={{
        top,
        background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)',
        animation: 'docker-flow 8s linear infinite',
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const VerticalGridLine: React.FC<VerticalGridLineProps> = ({ left, delay }) => {
  return (
    <div
      className="absolute top-0 h-full w-px"
      style={{
        left,
        background: 'linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.3), transparent)',
        animation: 'docker-flowVertical 8s linear infinite',
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const AnimatedDockerBackground: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes docker-float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes docker-flow {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 0.3; }
          100% { opacity: 0; transform: translateX(100vw); }
        }
        @keyframes docker-flowVertical {
          0% { opacity: 0; transform: translateY(-100%); }
          50% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(100vh); }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>
    </>
  );
};

export default AnimatedDockerBackground;
