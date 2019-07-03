import React from 'react';
import { customConnect } from '../utils/reactReduxConnect';

const PhotoGrid = () => {
   return (
      <div className="photo-grid">
         I'm the photo grid
      </div>
   )
}

export default customConnect(PhotoGrid);
