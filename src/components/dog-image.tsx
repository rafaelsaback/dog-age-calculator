import * as React from 'react';
import './dog-image.scss';
import { useViewportSize } from '../use-viewport-size';

export const DogImage: React.FC = () => {
  const [vpWidth] = useViewportSize();

  const imgWidth = vpWidth > 350 ? '190' : '137';
  const imgHeight = vpWidth > 350 ? '162' : '117';

  return (
    <div className="img-container">
      <img
        src="https://partnersontheroad.com/wp-content/uploads/2020/07/cute-dog.jpg"
        width={imgWidth}
        height={imgHeight}
      />
    </div>
  );
};
