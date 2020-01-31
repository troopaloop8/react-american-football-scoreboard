//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const initScore = 0;
  const [homeScore, setHomeScore] = useState(initScore);
  const [awayScore, setAwayScore] = useState(initScore);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [isRunning, setRunning] = useState(false);
  function toggle() {
    setRunning(!isRunning);
  }
  function reset() {
    setSeconds(0);
    setMinutes(12);
    setRunning(false);
  }
  useEffect(() => {
    let interval = null;
    if (isRunning ) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval)
            toggle();
          } 
          else {
            setMinutes(minutes => minutes - 1)
            setSeconds(seconds => seconds + 60)
          }
        } 
        setSeconds(seconds => seconds - 1);
      }, 1000)
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section >
      <section className="buttons">
      <button onClick={toggle}>Start/Stop Timer</button>
        <button onClick={reset}>Reset</button>
      </section>
      
      <section className="buttons">
        
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 6)}>Home Touchdown</button>
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 1)}>Home Extra Point</button>
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 2)}>Home Two Point Conversion</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 2)}>Home Safety</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 6)}>Away Touchdown</button>
          <button className="homeButtons__touchdown" onClick={() => setAwayScore(awayScore + 1)}>Away Extra Point</button>
          <button className="homeButtons__touchdown" onClick={() => setAwayScore(awayScore + 2)}>Away Two Point Conversion</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
          <button className="homeButtons__touchdown" onClick={() => setAwayScore(awayScore + 2)}>Away Safety</button>
        </div>
      </section>
    </div>
  );
}

export default App;
