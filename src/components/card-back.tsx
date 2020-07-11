import * as React from 'react';
import { DogImage } from './dog-image';
import { Container } from './container';
import './card-back.scss';
import backIcon from '@assets/arrow-left.png?as-module';

interface CardBackProps {
  humanAge: string;
  goBack(): void;
}

export const CardBack: React.FC<CardBackProps> = ({ humanAge, goBack }) => {
  return (
    <Container>
      <img
        className="back-icon"
        src={backIcon}
        alt="go back icon"
        onClick={goBack}
      />
      <DogImage />
      <div className="result-container">
        <div className="secondary-text">
          If your dog were human, he would be
        </div>
        <div className="human-age-text">{humanAge}</div>
        <div className="secondary-text">years old!</div>
      </div>
    </Container>
  );
};
