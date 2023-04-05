import { Button, Title, BtnWrapper } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Title>Please leave feedback</Title>
      <BtnWrapper>
        {options.map(el => (
          <Button key={el} value={el} type="button" onClick={onLeaveFeedback}>
            {el[0].toUpperCase() + el.slice(1)}
          </Button>
        ))}
      </BtnWrapper>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
