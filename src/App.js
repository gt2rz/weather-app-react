import React, { Suspense } from 'react';
import './App.css';

import Loading from './components/Loading'
import ErrorBoundary from './components/ErrorBoundary'

const Title = React.lazy(()=>import('./components/Title'))
const Results = React.lazy(()=>import('./components/Results'))

const API_KEY = "cc86a25e82d8001abee3b2476144e005"

const App = () => {  
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading message="LOADING...!!!"/>}>
        <div id="root">
        <Title />
          <Results API_KEY={API_KEY} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
