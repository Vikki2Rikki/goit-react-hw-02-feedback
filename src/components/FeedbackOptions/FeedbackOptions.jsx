import { Component } from 'react';

import { WrapperBtn, Btn } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <WrapperBtn>
        {options.map(option => (
          <Btn type="button" onClick={onLeaveFeedback} key={option}>
            {option}
          </Btn>
        ))}
      </WrapperBtn>
    );
  }
}

export default FeedbackOptions;
