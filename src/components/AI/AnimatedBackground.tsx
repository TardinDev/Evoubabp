'use client'

interface FloatingElementProps {
  delay: number;
  size: number;
  top: string;
  left: string;
}

interface NodeProps {
  top: string;
  left: string;
}

interface ConnectionProps {
  from: { top: string; left: string };
  to: { top: string; left: string };
}

const FloatingElement: React.FC<FloatingElementProps> = ({ delay, size, top, left }) => {
  return (
    <div
      className="absolute rounded-full blur-[1px]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(247, 147, 251, 0.3))',
        animation: `ai-float ${6 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        top,
        left,
      }}
    />
  );
};

const Node: React.FC<NodeProps> = ({ top, left }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-[#667eea] rounded-full shadow-[0_0_10px_rgba(102,126,234,0.5)]"
      style={{
        top,
        left,
        animation: 'ai-pulse 3s ease-in-out infinite',
      }}
    />
  );
};

const Connection: React.FC<ConnectionProps> = ({ from, to }) => {
  const fromTop = parseFloat(from.top);
  const fromLeft = parseFloat(from.left);
  const toTop = parseFloat(to.top);
  const toLeft = parseFloat(to.left);

  const deltaX = toLeft - fromLeft;
  const deltaY = toTop - fromTop;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  return (
    <div
      className="absolute h-px"
      style={{
        background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.3), rgba(247, 147, 251, 0.3))',
        transformOrigin: 'left center',
        animation: 'ai-connectionPulse 4s ease-in-out infinite',
        top: from.top,
        left: from.left,
        width: `${distance}%`,
        transform: `rotate(${angle}deg)`,
      }}
    />
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes ai-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        @keyframes ai-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        @keyframes ai-connectionPulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0} size={8} top="18%" left="12%" />
        <FloatingElement delay={2} size={12} top="62%" left="78%" />
        <FloatingElement delay={4} size={6} top="34%" left="52%" />
        <FloatingElement delay={1} size={10} top="78%" left="22%" />
        <FloatingElement delay={3} size={15} top="46%" left="88%" />
        <FloatingElement delay={5} size={9} top="14%" left="70%" />

        <div className="absolute inset-0">
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
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;
