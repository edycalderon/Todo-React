import React from 'react';
import { AppUI } from './AppUI';
import { Todoprovider } from '../TodoContext'
function App() {
  return (
    <Todoprovider>
      <AppUI/>
    </Todoprovider>
    
    
  );

  }
    

export default App;
