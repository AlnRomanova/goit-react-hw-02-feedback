import React, {Component} from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLeaveFeedback = () => {
    this.setState((prevState) => ({
          value: prevState.value + 1,
    }));

  };

  render() {

  const {good, neutral, bad} = this.state;

  return (
    <>
    <Section title = 'Please leave feedback'>
       <FeedbackOptions options={this.state} onLeaveFeedback={this.handleLeaveFeedback}/>
       <Statistics  good={good} neutral={neutral} bad={bad}/>
    </Section>

    </>

  );

  }

};

