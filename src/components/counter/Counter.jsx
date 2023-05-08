import React from 'react';
import useCounter from '../../hooks/useCounter';

const Counter = () => {
  const counter = useCounter(0, -3, 8);

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (event.target.id) {
      case 'incr':
        counter.increment();
        break;
      case 'decr':
        counter.decrement();
        break;
      case 'reset':
        counter.reset();
        break;
      default:

        break;
    }
  };

    const ShowOutOfRange = () => {
      return (
        <div className="alert alert-warning" role="alert">
          <p>OUT OF RANGE</p>
          <p>{`The counter range is set between ${counter.minRange} and ${counter.maxRange}`}</p>
        </div>
      );
    };

  return (
    <div className="container">
      <h1>
        Counter
      </h1>

      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <input
          className="input-group-text"
          value={counter.value}
          type="text"
          readOnly
        />
        <button className="btn btn-primary" type="button" id="incr" onClick={handleSubmit}>Increment</button>
        <button className="btn btn-success" type="button" id="decr" onClick={handleSubmit}>Decrement</button>
        <button className="btn btn-danger" type="button" id="reset" onClick={handleSubmit}>Reset</button>
      </div>

      {!counter.isInRange() && <ShowOutOfRange />}

    </div>
  );
};

export default Counter;
