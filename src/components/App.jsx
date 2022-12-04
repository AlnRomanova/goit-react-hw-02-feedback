import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
 total = 0;
 positivePercentage = 0;
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleLeaveFeedback = e => {
   this.setState(prevState => ({ [e.target.id]: prevState[e.target.id] + 1 }));

   this.countTotalFeedback();

  };

 countTotalFeedback() {
  this.total = this.state.good + this.state.neutral + this.state.bad;
  return this.total;
 };

 countPositiveFeedbackPercentage() {
  this.positivePercentage = Math.round((this.state.good/this.total) * 100 ).toFixed(0);
  if(this.state.good > 0) {
  return this.positivePercentage + "%";
  }
 }


  render() {
    const { good, neutral, bad, children} = this.state;


    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={children}
            onLeaveFeedback={this.handleLeaveFeedback}/>
            {this.handleLeaveFeedback > 0 ?
            (<Statistics good={good} neutral={neutral} bad={bad} total = {this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>)
            : (<Notification message="There is no feedback"/>)
          }


        </Section>
      </>
    );
  }
}
