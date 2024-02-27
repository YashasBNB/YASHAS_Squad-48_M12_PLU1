// src/App.jsx
import React from 'react';
import data from './data.json';
import UserCardList from './components/UserCardList';

function App() {
  return (
    <div className="app">
      <h1>Squads Info</h1>
      <UserCardList squads={data} />
    </div>
  );
}

export default App;
