import React from 'react'
import '../../assets/css/app.css';
import Layout from '../layout/Layout';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { vacancyReducer } from '../../store/reducers/vacancyReducer'
import thunk from 'redux-thunk'

const store = createStore(vacancyReducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <section className="app-wrapper">
        <Layout />
      </section>
    </Provider>
  );
}

export default App;
