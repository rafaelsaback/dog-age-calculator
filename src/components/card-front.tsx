import * as React from 'react';
import { DogImage } from './dog-image';
import { AgeInput } from './age-input';
import './card-front.scss';
import { Dispatch } from 'react';
import { Container } from './container';

interface CardFrontProps {
  age: string;
  setAge: Dispatch<string>;
  onCalculate(): void;
}

export const CardFront: React.FC<CardFrontProps> = ({
  age,
  setAge,
  onCalculate,
}) => {
  return (
    <Container>
      <h2 className="title">If your dog were human, how old would he be?</h2>
      <DogImage />
      <AgeInput age={age} setAge={setAge} />
      <button className="button" onClick={onCalculate}>
        Calculate
      </button>
    </Container>
  );
};
