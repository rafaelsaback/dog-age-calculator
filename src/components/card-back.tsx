import * as React from 'react';
import { DogImage } from './dog-image';
import { Container } from './container';

interface CardBackProps {
  humanAge: string;
  goBack(): void;
}

export const CardBack: React.FC<CardBackProps> = ({ humanAge, goBack }) => {
  return (
    <Container>
      <div onClick={goBack}>Back</div>
      <DogImage />
      <p>If your dog were a human, he would be {humanAge} years old</p>
    </Container>
  );
};
