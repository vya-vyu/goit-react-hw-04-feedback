import { Title, StatisticsList, ItemTitle } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  options,
  countTotalFeedback,
  positiveFeedback,
}) => {
  return (
    <>
      <Title>Statistics</Title>
      <StatisticsList>
        {options.map(([key, value]) => (
          <li key={key}>
            <ItemTitle>{key[0].toUpperCase() + key.slice(1)} :</ItemTitle>
            <span> {value}</span>
          </li>
        ))}

        <li>
          {' '}
          <ItemTitle>Total :</ItemTitle>
          <span> {countTotalFeedback}</span>
        </li>
        <li>
          {' '}
          <ItemTitle>Positive feedback:</ItemTitle>
          <span> {positiveFeedback}%</span>
        </li>
      </StatisticsList>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.array,
  countTotalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
