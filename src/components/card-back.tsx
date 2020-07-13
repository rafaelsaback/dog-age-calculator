import * as React from 'react';
import { DogImage } from './dog-image';
import { Container } from './container';
import './card-back.scss';

interface CardBackProps {
  humanAge: string;
  goBack(): void;
}

export const CardBack: React.FC<CardBackProps> = ({ humanAge, goBack }) => {
  return (
    <Container>
      <img
        className="back-icon"
        src="https://partnersontheroad.com/wp-content/uploads/2020/07/arrow-left.png"
        alt="go back icon"
        onClick={goBack}
      />
      <DogImage />
      <div className="result-container">
        <div className="secondary-text">
          Se seu cachorro fosse humano, ele teria
        </div>
        <div className="human-age-text">{humanAge}</div>
        <div className="secondary-text">anos!</div>
      </div>
    </Container>
  );
};
