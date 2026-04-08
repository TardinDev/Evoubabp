'use client'

import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';

const ShowSection = ({ images, direction }: { images: string[]; direction: 'left' | 'right' }) => {
  const props = useSpring({
    from: { transform: direction === 'left' ? 'translateX(0%)' : 'translateX(-50%)' },
    to: { transform: direction === 'left' ? 'translateX(-50%)' : 'translateX(0%)' },
    config: { duration: 15000 },
    reset: true,
    loop: true,
  });

  return (
    <div className="overflow-hidden w-full py-5">
      <animated.div className="flex w-fit gap-[30px] py-2.5" style={props}>
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`App ${index + 1}`}
            className="w-16 h-16 sm:w-[100px] sm:h-[100px] rounded-[10px] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-[10deg]"
          />
        ))}
      </animated.div>
    </div>
  );
};

ShowSection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default ShowSection;
