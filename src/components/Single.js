import React from 'react';
import { customConnect } from '../utils/reactReduxConnect';

const Single = () => {
   return (
      <div className="single-photo">
         I'm the single
      </div>
   )
}

export default customConnect(Single);
