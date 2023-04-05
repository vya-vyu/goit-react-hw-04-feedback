import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const onLeaveFeedback = e => {
    setOptions(prevState => ({
      ...prevState,
      [e.target.value]: prevState[e.target.value] + 1,
    }));
  };
  const countTotalFeedback = () => {
    return Object.values(options).reduce((total, value) => {
      total += value;
      return total;
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((options.good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback
        options={Object.keys(options)}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <Statistics
          options={Object.entries(options)}
          countTotalFeedback={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
};
