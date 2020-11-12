import '../../assets/css/app.css';
import Layout from '../layout/Layout';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function App() {

  return (
    <section className="app-wrapper">
      <Layout />
    </section>
  );
}

export default App;
