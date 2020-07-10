import * as React from 'react';
import './dog-image.scss';

export const DogImage: React.FC = () => {
  return (
    <div className="img-container">
      <img
        src="https://partnersontheroad.com/wp-content/uploads/2020/07/cute-dog.jpg"
        width="190"
        height="162"
      />
    </div>
  );
};
