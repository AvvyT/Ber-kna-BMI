import React, { useState } from 'react';
import './App.css';

function BodyMassIndexCalculator() {
  const [cm, updateLength] = useState(0);
  const [kg, updateMass] = useState(0);
  const [bmi, updateBmi] = useState(null);

  function calculate(cm, kg) {
    const bmi = kg / (cm / 100) ** 2;

    updateBmi(bmi.toFixed(2));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Body mass calculator</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          calculate(cm, kg);
          }}>
          <label>Längd </label>
          <input
            type='number'
            placeholder=' Write a length..'
            className='lengthandMass'
            value={cm}
            onChange={e => updateLength(e.target.value)}
          />
          <label> Vikt </label>
          <input
            type='number'
            placeholder=' Write a mass..'
            className='lengthandMass'
            value={kg}
            onChange={e => updateMass(e.target.value)}
          />
          <input
            className='style-button'
            type='submit'
            value='Bärekna'
          />
        </form>
        <h2>BMI värdet är {bmi}</h2>
      </header>
    </div>
  );
}

export default BodyMassIndexCalculator;
