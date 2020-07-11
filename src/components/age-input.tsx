import * as React from 'react';
import { Dispatch } from 'react';
import './age-input.scss';

interface AgeInputProps {
  age: string;
  setAge: Dispatch<string>;
}

export const AgeInput: React.FC<AgeInputProps> = ({ age, setAge }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  return (
    <div className="input-container">
      <label className="input-label">Enter your dog's age in years:</label>
      <input className="input" type="number" value={age} onChange={onChange} />
    </div>
  );
};
