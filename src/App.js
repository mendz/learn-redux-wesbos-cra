import React from 'react';

// import react router deps
import { BrowserRouter, Route } from 'react-router-dom';

// import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

function App() {
   return (
      <BrowserRouter>
         <Route path="/" exact component={Main} />
         <Route path="/" exact component={PhotoGrid} />
         <Route path="/view/:photoId" exact component={Single} />
      </BrowserRouter>
   )
}

export default App;