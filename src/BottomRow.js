import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(1);
  const [yardsToGo, setYardsToGo] = useState(10);
  const [yardLine, setYardLine] = useState(25);
  const [quarter, setQuarter] = useState(1);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={() => setDown(down + 1)}>Next Down</button>
        <button onClick={() => setDown(down - (down - 1))}>First Down!</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yardsToGo}</div>
        
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yardLine}</div>
        
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={() => setQuarter(quarter + 1)}>Next Quarter</button>
        <button onClick={() => setQuarter(quarter - (quarter - 1))}>Restart Game</button>
      </div>

    </div>
  );
};

export default BottomRow;
