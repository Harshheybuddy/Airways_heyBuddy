import React from 'react';
import { Toaster } from 'react-hot-toast';
import Routing from './router/Routing';

const App = () => {
  return (
    <div>
      <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <Routing />
    </div>
  );
};

export default App;