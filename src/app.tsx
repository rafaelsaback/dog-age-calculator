import React, { useState } from 'react';
import './app.scss';
import ReactCardFlip from 'react-card-flip';
import { CardFront } from './components/card-front';
import { CardBack } from './components/card-back';

const App: React.FC = () => {
  const [age, setAge] = useState('');
  const [humanAge, setHumanAge] = useState('');
  const [isFlipped, setFlipped] = useState(false);
  const onCalculate = () => {
    const ageFloat = parseFloat(age);
    if (ageFloat > 0) {
      const humanAge = Math.round(16 * Math.log(ageFloat) + 31);
      setHumanAge(humanAge.toString());
      setFlipped(true);
    }
  };

  const goBack = () => {
    setFlipped(false);
  };

  return (
    <div className="app">
      <ReactCardFlip isFlipped={isFlipped}>
        <CardFront age={age} setAge={setAge} onCalculate={onCalculate} />
        <CardBack humanAge={humanAge} goBack={goBack} />
      </ReactCardFlip>
    </div>
  );
};

export default App;
