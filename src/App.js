import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetEmbed from 'react-tweet-embed';

const TWEET_IDS = [
  '995703966863380482',
  '1001912323370467329',
  '1002574344164462592',
  '989184836060434432',
  '1002842224411992064',
  '999632602381287431',  
  '986343945142702080',
  '991859936178065408',
  '969593070558830593',
  '1002298034754072577',
  '1001490808434905090',
  '992068718380437504',
  '983494823914094595',
  '994602851992129537',
  '971116427598950400',
  '991286706853695489',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A React-based Tweet Wall</h1>
        </header>
        <p className="App-intro">
          Recent tweets from information visualization experts
        </p>
        <TweetWall tweetsIds={TWEET_IDS} />
      </div>
    );
  }
}

const TweetWall = ({ tweetsIds }) =>
  <div className="tweet-wall">
    {tweetsIds.map(id =>
      <div key={id} className="tweet-wall-item">
        <TweetEmbed
          id={id}
          options={{ cards: 'hidden', conversation: 'none' }}
        />
      </div>
    )}
  </div>

export default App;
