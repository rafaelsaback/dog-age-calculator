import * as React from 'react';
import { DogImage } from './dog-image';
import { AgeInput } from './age-input';
import './card-front.scss';
import { Dispatch } from 'react';
import { Container } from './container';
import * as cn from 'classnames';

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
  const buttonEnabled = parseFloat(age) > 0;
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };
  return (
    <form onSubmit={onSubmit}>
      <Container>
        <h2 className="title">If your dog were human, how old would he be?</h2>
        <DogImage />
        <AgeInput age={age} setAge={setAge} />
        <button
          type="submit"
          disabled={!buttonEnabled}
          className={cn('button', {
            'button-enabled': buttonEnabled,
            'button-disabled': !buttonEnabled,
          })}
        >
          Calculate
        </button>
      </Container>
    </form>
  );
};
