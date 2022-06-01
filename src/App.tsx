/* eslint-disable import/no-unresolved */
import * as React from 'react';
import 'https://cdn.skypack.dev/ios-calculator-for-web';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <ios-calculator />
    </div>
  );
}

export default App;
