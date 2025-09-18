import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';

const ShowSection = ({ images, direction }) => {
  const props = useSpring({
    from: { transform: direction === 'left' ? 'translateX(0%)' : 'translateX(-50%)' },
    to: { transform: direction === 'left' ? 'translateX(-50%)' : 'translateX(0%)' },
    config: { duration: 15000 },
    reset: true,
    loop: true,
  });

  return (
    <Wrapper>
      <Section style={props}>
        {[...images, ...images].map((img, index) => (
          <Image key={index} src={`/images/${img}`} alt={`App ${index + 1}`} />
        ))}
      </Section>
    </Wrapper>
  );
};

ShowSection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default ShowSection;



const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
`;

const Section = styled(animated.div)`
  display: flex;
  width: fit-content;
  gap: 30px;
  padding: 10px 0;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(10deg);
  }
`;
