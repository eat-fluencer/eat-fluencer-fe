import * as React from 'react';

import {ContextProvider} from './src/contexts/global-context';
import AppInner from './src/AppInner';

function App() {
  return (
    <ContextProvider>
      <AppInner />
    </ContextProvider>
  );
}

export default App;
