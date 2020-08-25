
import React from 'react';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';

import Store from './redux/store'



const App = () => {
  return (
    <>
    <Provider store={Store}>
      
    <CakeContainer/>      


    </Provider>
    </>
  );
};



export default App;
